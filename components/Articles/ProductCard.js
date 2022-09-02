import React from 'react';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@mui/material';
import styles from '../../styles/ProductCard.module.css';
import AutitoProd from '../../public/images/autitoProd.png'
import iconUSDT from '../../public/images/iconUSDT.png'
import iconTool from '../../assets/svgs/iconTool.svg'
import Heart from '../../assets/svgs/heart.svg'
import MapMaker from '../../assets/svgs/map-marker.svg'

function ProductCard() {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ED1848',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  return(
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <div className={styles.imagewrapper}>
          <Image className={styles.image} src={AutitoProd} alt="Autito" />
        </div>
        <div className={styles.content}>
          <div className={styles.titlewrapper}>
            <div className={styles.left}>
              <Image className={styles.icon} src={iconTool} alt="icon tool" />
              <div className={styles.productname}><p>Fiat 500</p>{/* <p>{element.name}</p> */}</div>
            </div>
            <Image className={styles.icon} src={Heart} alt="icon heart" />
          </div>
          <div className={styles.description}>
            <p className={styles.descriptiontext}>1.4 Cult 8v. Nafta. 2P Automático</p>{/* <p>{element.description}</p> */}
          </div>
          <div className={styles.price}>
            <Image className={styles.iconusdt} src={iconUSDT} alt="icon usdt"/>
            <p className={styles.pricecurrency}>USDT</p>
            <p className={styles.priceamount}>5.000</p>{/* <p>{element.price}</p> */}
          </div>
          <div className={styles.specifications}>
            <p className={styles.specificationyear}>2012</p> {/* <p>{element.year}</p> */}
            <p className={styles.specificationdistance}>92.000 km</p> {/* <p>{element.distance}</p> */}
          </div>
          <div className={styles.location}>
            <Image src={MapMaker} className={styles.locationicon} alt="map marker icon"/>
            <p className={styles.locationtext}>Buenos Aires, Argentina</p> {/* <p>{element.ubication}</p> */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ProductCard;