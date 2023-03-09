import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC";
import Toolbar from "../components/Toolbar/Toolbar";
import ProductCard from "../components/Articles/ProductCard";
import HowOperate from "../components/HowOperate/HowOperate";
import GeneralFooter from "../components/GeneralFooter/GeneralFooter";
import LoadingSpinner from "../components/Loading/LoadingSpinner";

export default function Products() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#ED1848",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetch("/api/v1/products");
      const data = await res.json();
      setData(data.vehicles);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="criptocars" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <AppBarCC />
        <Toolbar />
        <div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className={styles.ProductsAll}>
              {/* <ProductCard /> */}
              <Grid container spacing={2}>
                {data &&
                  data
                    .filter((element) => element.visibility)
                    .map((element) => {
                      return <ProductCard key={element.id} {...element} />;
                    })}
              </Grid>
            </div>
          )}
        </div>
        <aside>
          <HowOperate />
          <GeneralFooter />
        </aside>
      </div>
    </ThemeProvider>
  );
}
