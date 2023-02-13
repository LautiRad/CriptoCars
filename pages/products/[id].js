import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from "next/image"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import AppBarCC from "../../components/ResponsiveAppBar/AppBarCC"
import Head from "next/head"
import styles from '../../styles/Home.module.css'
import { Grid } from "@mui/material"
import HowOperate from '../../components/HowOperate/HowOperate'
import GeneralFooter from '../../components/GeneralFooter/GeneralFooter'

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const API_URL = process.env.API_URL;
  const TOKEN = process.env.TOKEN;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const get = await axios({
          method: "get",
          url: `${API_URL}/v1/post/${id}`,
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
    fetchDetails();
  }, []);

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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="criptocars" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <AppBarCC /> 
        <div className={styles.ProductsAll}>
          {/* <ProductCard /> */}
            <Grid container spacing={2}>
              {data && (
              <div key={data._id}>
                <p>{data.nameCar}</p>
                <p>Descripción: {data.description}</p>
                <p>Modelo: {data.model}</p>
                <p>Kilómetros: {data.km}</p>
                <p>Precio: {data.price}</p>
                <p>Ubicación: {data.ubication}</p>
                <Image
                  src={data.urlimagepost}
                  alt="Autito"
                  width="100%"
                  height="80%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              )}
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

ProductDetails.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  };
};