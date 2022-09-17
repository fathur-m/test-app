import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/animations/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import { AuthContextProvider } from "../hooks/useAuth";
import ProtectRoutes from "../components/ProtectRoutes";

const noAuthRequired = ["/", "/Login", "/SignUp"];

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContextProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AnimatePresence mode="wait">
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} key={router.route} />
          ) : (
            <ProtectRoutes>
              <Component {...pageProps} key={router.route} />
            </ProtectRoutes>
          )}
        </AnimatePresence>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
