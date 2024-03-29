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
import iconWpp from "../../public/images/whatsappVerde.png";

import iconTelegram from "../../assets/svgs/telegram.svg";
import iconPaydece from "../../assets/svgs/paydece.svg";
import HeartFavorite from "../../assets/svgs/heartFavorite.svg";
import Button from "@mui/material/Button";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ProductDetails({ vehicle }) {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    if (id == undefined) return;
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
    if (Array.isArray(data.vehicle.image)) {
      images = data.vehicle.image;
    } else {
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
    setCarousel(carousel);

    fetch(`/api/v1/favorite/${id}`)
      .then((response) => response.json())
      .then((data) => loadFavorite(data))
      .catch((error) => console.error(error));
    const loadFavorite = (data) => {
      if (data.favorite != null) {
        setIsFavorite(true)
      }
      setIsLoading(false);
    }
  };

  const handleFavorite = async () => {
    setIsFavorite(!isFavorite)
    if (isFavorite) {
      const response = await axios.delete(`/api/v1/favorite/${id}`);
    } else {
      const response = await axios.put(`/api/v1/favorite/${id}`);
    }
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
        {data && !isLoading && (
          <Grid container spacing={2} p={4}>
            <Grid item sm={12} md={7}>
              <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
              >
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
                    {isFavorite ? (
                      <Image
                        className={styles.iconC}
                        src={HeartFavorite}
                        alt="icon heartFavorite"
                        onClick={handleFavorite}
                      />
                    ) : (
                      <Image
                        className={styles.iconC}
                        src={Heart}
                        alt="icon heart"
                        onClick={handleFavorite}
                      />
                    )}
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
                    <p className={styles.descriptiontextC}>
                      Contacto del Vendedor:
                    </p>
                    <p className={styles.descriptiontextC}>
                      Contactá al Vendedor y sacate todas tus dudas.
                    </p>
                    <div className={styles.contactIcons}>
                      <Link href={`mailto:${data.email}`}>
                        <div className={styles.gmailC}>
                          <Image
                            // className={styles.iconGmail}
                            src={iconGmail}
                            alt="icon gmail"
                            width="50%"
                            height="50%"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className={styles.contactIcons}>
                      <Link
                        href={`https://api.whatsapp.com/send?phone=${data.whatsapp}&text=Hola+me+interesa+el${data.name}`}
                      >
                        <div className={styles.gmailC}>
                          <Image
                            // className={styles.iconGmail}
                            src={iconWpp}
                            alt="icon gmail"
                            width="50%"
                            height="50%"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.contactC}>
                    <p className={styles.descriptiontextC}>
                      Pago por SMART CONTRACTS:
                    </p>
                    <p className={styles.descriptiontextC}>
                      Recomendamos que utilices los contratos inteligentes de
                      Paydece para realizar tu transacción de forma segura. Si
                      tenes alguna duda de como realizar la transaccion podes
                      consultar en el siguiente grupo de telegram.
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
                    </p>
                    <Link href="https://app.paydece.io">
                      <div className={styles.paydece}>
                        <Image
                          src={iconPaydece}
                          alt="icon gmail"
                          width="200%"
                          height="80%"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Grid>
            {data.attributes && (
              <Grid container sx={{ paddingLeft: "16px" }}>
                <ProductProperties properties={data}></ProductProperties>
                <ProductTab properties={data}></ProductTab>
              </Grid>
            )}
          </Grid>
        )}
        {isLoading && (
          <div>
            <LoadingSpinner />
          </div>
        )}

        <aside>
          <HowOperate />
          <GeneralFooter />
        </aside>
      </div>
    </ThemeProvider>
  );
}
