import React, { useState, useEffect } from "react";
import AppBarCC from "../../components/ResponsiveAppBar/AppBarCC";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Container, Grid } from "@mui/material";
import HowOperate from "../../components/HowOperate/HowOperate";
import GeneralFooter from "../../components/GeneralFooter/GeneralFooter";
import { getSession, useSession } from "next-auth/react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import ProductCard from "../../components/Articles/ProductCard";

export default function Favorites({ address }) {
  const { status } = useSession();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch("/api/v1/favorite");
      const data = await res.json();
      setData(data.favorite);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="Versión beta de criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AppBarCC />
      <div className={styles.ProductsAll}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {status === "authenticated" ? (
              <div>
                {/* <ProductCard /> */}
                <Grid container spacing={5}>
                  {data &&
                    data
                      .filter((element) => element.visibility)
                      .map((element) => {
                        return <ProductCard key={element.id} {...element} />;
                      })}
                </Grid>
              </div>
            ) : (
              <div>
                <br />
                <h3>Inicia sesión para ver tus vehículos favoritos.</h3>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.container}>
        <aside>
          <HowOperate />
          <GeneralFooter />
        </aside>
      </div>
    </div>
  );
}

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
