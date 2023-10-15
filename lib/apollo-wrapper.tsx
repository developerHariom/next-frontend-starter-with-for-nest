"use client";
import { HttpLink } from "@apollo/client/link/http";
import { ApolloLink } from "@apollo/client";
import { onError } from "apollo-link-error";
import { RetryLink } from "@apollo/client/link/retry";
import {
  SSRMultipartLink,
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { Operation, FetchResult } from "apollo-link";
import { SubscriptionObserver } from "zen-observable-ts";
import { fetchRefreshToken, handleLogout } from ".";
import { Observable } from "zen-observable-ts";
import Cookies from "js-cookie";

const httpLink = new HttpLink({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
});

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = Cookies.get("accessToken");

  operation.setContext(({ headers }: any) => ({
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  }));
  return forward(operation);
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }): any => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err && err?.extensions?.code === "UNAUTHENTICATED") {
          return new Observable<FetchResult>((subscriber) => {
            (async () => {
              try {
                const token = await fetchRefreshToken();
                if (token) {
                  Cookies.set("accessToken", token);
                  setNewAccessTokenAndRetryOperation(
                    token,
                    operation,
                    forward as any,
                    subscriber
                  );
                }
                else{
                
                  handleLogout()
                  
                }
              } catch (err) {
                console.error(err);
                subscriber.error(err);
              }
            })();
          });
        }
      }
    }

    if (networkError) {
      console.error("Network error:", networkError);
    }

    // Return void when not handling the error
    return;
  }
);

const retryLink = new RetryLink();

function makeClient() {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: ApolloLink.from([
      new SSRMultipartLink({ stripDefer: true }),
      authLink,
      errorLink as any,
      retryLink,
      httpLink,
    ]),
  });
}

function setNewAccessTokenAndRetryOperation(
  newAccessToken: any,
  operation: Operation,
  forward: {
    (operation: Operation): Observable<
      FetchResult<
        { [key: string]: any },
        Record<string, any>,
        Record<string, any>
      >
    >;
    (arg0: any): {
      (): any;
      new (): any;
      subscribe: {
        (arg0: {
          next: (value: any) => void;
          error: (err: any) => void;
          complete: () => void;
        }): void;
        new (): any;
      };
    };
  },
  subscriber: SubscriptionObserver<unknown>
) {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${newAccessToken}`,
    },
  }));

  const subscriberObj = {
    next: (value: any) => {
      if (!subscriber.closed) {
        subscriber.next(value);
      }
    },
    error: (err: any) => {
      if (!subscriber.closed) {
        subscriber.error(err);
      }
    },
    complete: () => {
      if (!subscriber.closed) {
        subscriber.complete();
      }
    },
  };

  forward(operation).subscribe(subscriberObj);
}

export function ApolloWrapper({ children }: any) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
