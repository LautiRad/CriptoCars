import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBarCC from "../../components/ResponsiveAppBar/AppBarCC";
import Head from "next/head";
import styles from "../../styles/CarDetails.module.css";
import { Grid } from "@mui/material";
import HowOperate from "../../components/HowOperate/HowOperate";
import GeneralFooter from "../../components/GeneralFooter/GeneralFooter";
import ProductProperties from "../../components/Product/ProductProperties";
import ProductTab from "../../components/Product/ProductTab";
import iconUSDT from "../../public/images/iconUSDT.svg";
import iconTool from "../../assets/svgs/iconTool.svg";
import Heart from "../../assets/svgs/heart.svg";
import MapMaker from "../../assets/svgs/map-marker.svg";
import iconGmail from "../../assets/svgs/gmail.svg";
import iconTelegram from "../../assets/svgs/telegram.svg";
import iconPaydece from "../../assets/svgs/paydece.svg";
import Button from "@mui/material/Button";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ProductDetails({ vehicle }) {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    if(id==undefined)
      return
    setIsLoading(true);
    fetch(`/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => loadData(data))
      .catch((error) => console.error(error));
  }, [id]);

  const loadData = (data) => {
    setData(data.vehicle);
    carousel = [];
    const images = [];
    if(Array.isArray(data.vehicle.image)){
      images = data.vehicle.image;
    }else {
      images.push(data.vehicle.image);
    }
    images.forEach((image, index) => {
      carousel.push(
          <Image
              src={image}
              alt="Autito"
              width="100%"
              height="60%"
              layout="responsive"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
          />
      );
    });
    setCarousel(carousel)
    setIsLoading(false)
  }


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
              <Carousel showStatus={false}  showThumbs={false} infiniteLoop={true}>
                {carousel}
              </Carousel>

            </Grid>
            <Grid item sm={12} md={5}>
              <div className={styles.containerC}>
                <div className={styles.contentC}>
                  <div className={styles.titlewrapperC}>
                    <div className={styles.leftC}>
                      <Image
                        className={styles.iconC}
                        src={iconTool}
                        alt="icon tool"
                      />
                      <div className={styles.productnameC}>
                        <p>{data.name}</p>
                      </div>
                    </div>
                    <Image
                      className={styles.iconC}
                      src={Heart}
                      alt="icon heart"
                    />
                  </div>
                  <div className={styles.descriptionC}>
                    <p className={styles.descriptiontextC}>
                      {data.description}
                    </p>
                  </div>
                  <div className={styles.specificationsC}>
                    <p className={styles.specificationyearC}>
                      Modelo: {data.model}
                    </p>{" "}
                    <p className={styles.specificationdistanceC}>
                      {data.km} km
                    </p>{" "}
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
                  </div>
                  <div className={styles.contactC}>
                    <p className={styles.descriptiontextC}>CONTACTO</p>
                    <div className={styles.contactIcons}>
                      {/* <div className={styles.gmailC}>
                  <Image
                    className={styles.iconGmail}
                    src={iconGmail}
                    alt="icon gmail"
                    width="50%"
                    height="50%"
                  />
                </div> */}
                      <Link href="https://t.me/paydece">
                        <div className={styles.telegramC}>
                          <Image
                            className={styles.iconTelegram}
                            src={iconTelegram}
                            alt="icon telegram"
                            width="50%"
                            height="50%"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.contactC}>
                    <p className={styles.descriptiontextC}>
                      PAGO POR SMART CONTRACTS
                    </p>
                    <Link href="https://app.paydece.io">
                      <div className={styles.paydece}>
                        <Image
                          src={iconPaydece}
                          alt="icon gmail"
                          width="250%"
                          height="80%"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Grid>
            {data.attributes && (
              <Grid container sx={{paddingLeft: "16px"}}>
                <ProductProperties properties={data} ></ProductProperties>
                <ProductTab properties={data}></ProductTab>
              </Grid>
            )}

          </Grid>
        )}
        {isLoading && <div><LoadingSpinner /></div>}

        <aside>
          <HowOperate />
          <GeneralFooter />
        </aside>
      </div>
    </ThemeProvider>
  );
}
