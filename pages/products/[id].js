import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from "next/image"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import AppBarCC from "../../components/ResponsiveAppBar/AppBarCC"
import Head from "next/head"
import styles from '../../styles/CarDetails.module.css'
import { Grid } from "@mui/material"
import HowOperate from '../../components/HowOperate/HowOperate'
import GeneralFooter from '../../components/GeneralFooter/GeneralFooter'
import ProductProperties from '../../components/Product/ProductProperties'
import ProductTab from '../../components/Product/ProductTab'
import iconUSDT from "../../public/images/iconUSDT.png";
import iconTool from "../../assets/svgs/iconTool.svg";
import Heart from "../../assets/svgs/heart.svg";
import MapMaker from "../../assets/svgs/map-marker.svg";
import iconGmail from "../../assets/svgs/gmail.svg";
import iconTelegram from "../../assets/svgs/telegram.svg";
import iconPaydece from "../../assets/svgs/paydece.svg";
import Button from "@mui/material/Button";

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
      {data && (
        <Grid container spacing={2} p={4}>
          <Grid item sm={12} md={7}>
            <Image
              src={data.urlimagepost}
              alt="Autito"
              width="100%"
              height="60%"
              layout="responsive"
              objectFit="cover"
              style={{borderRadius:"10px"}}
            />
          </Grid>
          <Grid item sm={12} md={5}>
        <div className={styles.containerC}>
          <div className={styles.contentC}>
            <div className={styles.titlewrapperC}>
              <div className={styles.leftC}>
                <Image className={styles.iconC} src={iconTool} alt="icon tool" />
                <div className={styles.productnameC}>
                  <p>{data.nameCar}</p>
                </div>
              </div>
              <Image className={styles.iconC} src={Heart} alt="icon heart" />
            </div>
            <div className={styles.descriptionC}>
              <p className={styles.descriptiontextC}>{data.description}</p>
              {/* <p>{element.description}</p> */}
            </div>
            <div className={styles.specificationsC}>
              <p className={styles.specificationyearC}>Modelo: {data.model}</p>{" "}
              {/* <p>{element.year}</p> */}
              <p className={styles.specificationdistanceC}>{data.km} km</p>{" "}
              {/* <p>{element.distance}</p> */}
            </div>
            <div className={styles.locationC}>
              <Image
                src={MapMaker}
                className={styles.locationiconC}
                alt="map marker icon"
              />
              <p className={styles.locationtextC}>{data.ubication}</p>{" "}
            </div>
            <div className={styles.priceC}>
              <Image
                className={styles.iconusdtC}
                src={iconUSDT}
                alt="icon usdt"
              />
              <p className={styles.pricecurrencyC}>USDT</p>
              <p className={styles.priceamountC}>{data.price}</p>
              {/* <p>{element.price}</p> */}
            </div>
            {/* Contacto */}
            <div className={styles.contactC}>
              <p className={styles.descriptiontextC}>CONTACTO</p>
              <div className={styles.contactIcons}>
                <div className={styles.gmailC}>
                  <Image
                    className={styles.iconGmail}
                    src={iconGmail}
                    alt="icon gmail"
                    width="50%"
                    height="50%"
                  />
                </div>
                <div className={styles.telegramC}>
                  <Image
                    className={styles.iconTelegram}
                    src={iconTelegram}
                    alt="icon telegram"
                    width="50%"
                    height="50%"
                  />
                </div>
              </div>
            </div>
            {/* Pago */}
            <div className={styles.contactC}>
              <p className={styles.descriptiontextC}>PAGO POR SMART CONTRACTS</p>
                <div className={styles.paydece}>
                  <Image
                    src={iconPaydece}
                    alt="icon gmail"
                    width="250%"
                    height="80%"
                  />
                </div>
            </div>
          </div>
        </div>
        </Grid>
          <ProductProperties properties={data}/>
          <ProductTab properties={data}/>
        </Grid>
        )}

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