import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

const getProviders = (serverNonce, address) => [
  CredentialsProvider({
    name: "Ethereum",
    credentials: {
      message: {
        label: "Message",
        type: "text",
        placeholder: "0x0",
      },
      signature: {
        label: "Signature",
        type: "text",
        placeholder: "0x0",
      },
    },
    async authorize(credentials, req) {
      try {
        const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"));
        const nextAuthUrl = new URL(process.env.NEXTAUTH_URL);

        const result = await siwe.verify({
          signature: credentials?.signature || "",
          domain: nextAuthUrl.host,
          nonce: await getCsrfToken({ req }),
          // nonce: serverNonce,
        });

        if (result.success) {
          return {
            id: siwe.address,
          };
        } else {
          throw new Error("Invalid Ethereum signature");
        }
      } catch (e) {
        console.error("Error verifying Ethereum signature", e);
        throw new Error("Failed to authenticate with Ethereum");
      }
    },
  }),
];

const isDefaultSigninPage = (req) =>
  req.method === "GET" && req.query.nextauth?.includes("");

const auth = async (req, res) => {
  const providers = getProviders();
  const shouldHideEthereumProvider = isDefaultSigninPage(req);
  if (shouldHideEthereumProvider) {
    providers.pop();
  }

  try {
    return await NextAuth(req, res, {
      providers,
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
        async session({ session, token }) {
          session.address = token.sub;
          session.user.name = token.sub;
          return session;
        },
      },
    });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(401).json({ error: "Failed to authenticate user" });
  }
};

export default auth;
