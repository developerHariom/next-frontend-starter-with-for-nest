"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { persistStore } from "redux-persist";
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

persistStore(store);

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <ApolloWrapper>
      <NextUIProvider>
        <NextThemesProvider {...themeProps}>
          <Provider store={store}>{children}</Provider>
        </NextThemesProvider>
      </NextUIProvider>
    </ApolloWrapper>
  );
}
