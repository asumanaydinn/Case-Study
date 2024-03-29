import "../styles/main.scss";

import type { AppProps } from "next/app";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthProvider } from "@/context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
