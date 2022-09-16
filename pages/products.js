import React, { useState, useEffect } from "react";
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/ProductPage.module.css";
import Logo from "../public/images/full.png";
import Image from "next/image";
import AutitoProd from "../public/images/autitoProd.png";
import iconUSDT from "../public/images/iconUSDT.png";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ProductCard from "../components/Articles/ProductCard";
import axios from "axios";
import { Grid } from "@mui/material";

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://criptocar-api.azurewebsites.net/api/v1/post",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjYzMTcyMzc2LCJleHAiOjE2NjM3NzcxNzZ9.S6OoWeogiXvTehCh2s1obih9x21sEZF1ML9rwwdxwzs",
            },
          }
        );
        setData(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="Versión beta de criptocars" />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <AppBarCC />

        {/* <ProductCard /> */}
        <Grid container spacing={2}>
          {data &&
            data.map((element) => {
              return <ProductCard key={element.id} {...element} />;
            })}
        </Grid>

        <div className={styles.container}>
          <footer className={styles.footer}>
            <Link href="https://www.instagram.com/criptocars/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={Logo}
                  alt="Logo"
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
              </a>
            </Link>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

{
  /*           DEJO ACÁ COMENTADA LA CARD QUE ESTA LIGADA AL GET

              <div className={styles.grid}>
                {data && data.map((element)=>{
                  return(
                  <div className={styles.card_product}>
                    <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                    <p>{element.name}</p>
                    <p>{element.description}</p>
                    <p>{element.model}</p>
                    <p>{element.km}</p>
                    <p><Image src={iconUSDT} />${element.price}</p>
                    <p>{element.ubication}</p>
                    <Link href="/products">
                      <Button variant="contained">Comprar</Button>
                    </Link>
                  </div>
              )

                  Y ACÁ EN ESTA PARTE LA CARD HARCODEADA
                  <div className={styles.card_product}>
                    <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                    <p>Fiat 500</p>
                    <p>1.4 Cult 8v. Nafta. 2P Automático</p>
                    <p>2015</p>
                    <p>102.300 km</p>
                    <p><Image src={iconUSDT} alt="LogoUSDT" />$5300</p>
                    <p>Vicente López, Provincia de Buenos Aires.</p>
                    <Link href="/products">
                      <Button variant="contained">Comprar</Button>
                    </Link>
                  </div>
            })} 
          
          
          
          
          
          
          
          /////////////////////
        
        
        
         <div className={styles.grid}>
              {data && data.map((element)=>{
                return(
                <div className={styles.card_product}>
                  <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                  <p>{element.name}</p>
                  <p>{element.description}</p>
                  <p>{element.model}</p>
                  <p>{element.km}</p>
                  <p><Image src={iconUSDT} />${element.price}</p>
                  <p>{element.ubication}</p>
                  <Link href="/products">
                    <Button variant="contained">Comprar</Button>
                  </Link>
                </div>
            )
                
          })}*/
}
