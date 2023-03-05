import Head from "next/head";
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC";
import GeneralFooter from "../components/GeneralFooter/GeneralFooter";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import React from "react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });
  const address = token?.sub ?? null;

  // If you have a value for "address" here, your
  // server knows the user is authenticated.
  // You can then pass any data you want
  // to the page component here.

  return {
    props: {
      address,
      session,
    },
  };
};

export default function DashboardUpdate({ address }) {
  return address ? (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <h1>Authenticated as {address}</h1>
      <AppBarCC />
      <GeneralFooter />
    </div>
  ) : (
    <h1>Unauthenticated</h1>
  );
}
