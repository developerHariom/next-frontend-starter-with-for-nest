
import axios from "axios";
import { IncomingMessage } from "http";
import Cookies from "js-cookie";

export const isServer = () => typeof window === "undefined";
export const isDev = () => process.env.NODE_ENV === "development";



const query = `
      query Token($refreshToken: String) {
        token(refreshToken: $refreshToken)
      }
    `;
export async function fetchRefreshToken(req?: IncomingMessage) {
  const { data } = await axios.post(
    "http://localhost:8000/graphql",
    {
      query,
      variables: { refreshToken: undefined },
    },
    {
      withCredentials: true,
      headers:
        req && req.headers.cookie ? { cookie: req.headers.cookie } : undefined,
    }
  );

  return data?.data?.token;
}

export async function handleLogout() {
  // const logout = useAuthStore.getState().logout;
  Cookies.remove("role");
  Cookies.remove("accessToken");
  // logout();
  window.location.href = "/hariom";
}
