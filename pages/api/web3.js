import { configureChains, createClient } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

export const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

export const { connectors } = getDefaultWallets({
  appName: "CriptoCars",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});
