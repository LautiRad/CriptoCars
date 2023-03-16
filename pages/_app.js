import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { wagmiClient, chains } from "./api/web3";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const address = session?.address ?? null;

  return {
    props: {
      address,
      session,
    },
  };
};

function MyApp({ Component, pageProps, address }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [serverNonce, setServerNonce] = useState("");

  const getSiweMessageOptions = () => ({
    statement: "Sign to CriptoCars",
    nonce: serverNonce,
  });
  useEffect(() => {
    async function fetchNonce() {
      const response = await fetch("/api/auth");
      const { nonce } = await response.json();
      setServerNonce(nonce);
      const data = {
        id: pageProps.session?.user?.id,
        address: address,
      };
      const authResponse = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (authResponse.ok) {
        setIsAuthenticated(true);
      }
    }
    fetchNonce();
  }, []);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#1C2A3C",
              accentColorForeground: "white",
            })}
          >
            <Component {...pageProps} isAuthenticated={isAuthenticated} />
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </WagmiConfig>
    </SessionProvider>
  );
}

export default MyApp;
