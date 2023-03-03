import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Rainbow() {
  return (
    <div
      style={{
        marginLeft: "10px",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <ConnectButton label="Entrar" />
    </div>
  );
}
