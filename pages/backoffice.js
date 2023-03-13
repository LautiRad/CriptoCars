import { Container, Stack, Typography } from "@mui/material";
import CarList from "../components/Backoffice/Cars/CarList.js";
import Header from "../components/Backoffice/Header/Header.js";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const address = session?.address ?? null;
  const allowedWallets = process.env.ALLOWED_WALLETS.split(",");

  if (!allowedWallets.includes(address)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      address,
      allowedWallets,
    },
  };
};

export default function CarPage({ address, allowedWallets }) {
  const router = useRouter();
  const isAllowedUser = allowedWallets.includes(address);
  return (
    <>
      <Header />
      <Container sx={{ display: { xs: "block", md: "block" } }}>
        <Typography variant="h4" sx={{ mb: 5, mt: 5 }}>
          Cars
        </Typography>
        <CarList />
      </Container>
    </>
  );
}
