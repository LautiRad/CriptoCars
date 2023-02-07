import "@rainbow-me/rainbowkit/styles.css"
import {
  ConnectButton,
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function IndexPage() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#1C2A3C',
        accentColorForeground: 'white',
      })}>
        <div
          style={{
            marginLeft: '10px',
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <ConnectButton label="Entrar" />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
