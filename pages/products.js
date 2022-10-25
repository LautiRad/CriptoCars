import React, { useState, useEffect } from "react"
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC"
import Head from "next/head"
import styles from '../styles/Home.module.css'
import Image from "next/image"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import ProductCard from "../components/Articles/ProductCard"
import axios from "axios"
import { Grid } from "@mui/material"
import LogoNegro from '../public/images/fullNegro.png'
import HowOperate from '../components/HowOperate/HowOperate'
import GeneralFooter from '../components/GeneralFooter/GeneralFooter'

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

  const API_URL = process.env.API_URL;
  const TOKEN = process.env.TOKEN;

  console.log(API_URL, TOKEN);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const get = await axios({
          method: "get",
          url: `${API_URL}/v1/post`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${TOKEN}`,
            }
          });
        setData(get.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  console.log(data, "data");

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="criptocars" />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <AppBarCC /> 
        <div className={styles.ProductsAll}>
          {/* <ProductCard /> */}
            <Grid container spacing={2}>
              {data &&
                data.map((element) => {
                  return <ProductCard key={element.id} {...element} />;
                })}
            </Grid>
        </div>
        <aside> 
        <HowOperate/>         
        <GeneralFooter/>
        </aside>
      </div>
    </ThemeProvider>
  );
}

{
  /*           DEJO ACÁ COMENTADA LAS CARDS QUE USABAMOS

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
            })} 
     
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
