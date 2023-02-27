import React from "react";
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Link from "next/link";
import { Button } from "@mui/material";
import styles from "../../styles/ProductCard.module.css";
import AutitoProd from "../../public/images/autitoProd.png";
import iconUSDT from "../../public/images/iconUSDT.png";
import iconTool from "../../assets/svgs/iconTool.svg";
import Heart from "../../assets/svgs/heart.svg";
import MapMaker from "../../assets/svgs/map-marker.svg";

function ProductCard({
  km,
  description,
  price,
  name,
  image,
  _id,
  model,
  ubication,
}) {
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
      <Link href={`/products/${_id}`} target="_blank">
      <div className={styles.containerCard}>
        <div className={styles.containerC}>
          <div className={styles.imagewrapperC}>
            <Image
              src={image}
              alt="Autito"
              width="100%"
              height="80%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.contentC}>
            <div className={styles.titlewrapperC}>
              <div className={styles.leftC}>
                <Image className={styles.iconC} src={iconTool} alt="icon tool" />
                <div className={styles.productnameC}>
                  <p>{name}</p>
                </div>
              </div>
              <Image className={styles.iconC} src={Heart} alt="icon heart" />
            </div>
            <div className={styles.descriptionC}>
              <p className={styles.descriptiontextC}>{description}</p>
              {/* <p>{element.description}</p> */}
            </div>
            <div className={styles.priceC}>
              <Image
                className={styles.iconusdtC}
                src={iconUSDT}
                alt="icon usdt"
              />
              <p className={styles.pricecurrencyC}>USDT</p>
              <p className={styles.priceamountC}>{price}</p>
              {/* <p>{element.price}</p> */}
            </div>
            <div className={styles.specificationsC}>
              <p className={styles.specificationyearC}>Modelo: {model}</p>{" "}
              {/* <p>{element.year}</p> */}
              <p className={styles.specificationdistanceC}>{km} km</p>{" "}
              {/* <p>{element.distance}</p> */}
            </div>
            <div className={styles.locationC}>
              <Image
                src={MapMaker}
                className={styles.locationiconC}
                alt="map marker icon"
              />
              <p className={styles.locationtextC}>{ubication}</p>{" "}
            </div>
          </div>
        </div>
      </div>
      </Link>
    </ThemeProvider>
  );
}

export default ProductCard;
