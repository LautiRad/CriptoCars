import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider, 
  Theme
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import merge from 'lodash.merge';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
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
        accentColor: 'transparent',
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
