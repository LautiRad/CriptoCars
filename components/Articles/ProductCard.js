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
              <div className={styles.productname}><p>Fiat 500</p></div>
            </div>
            <Image className={styles.icon} src={Heart} alt="icon heart" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ProductCard;