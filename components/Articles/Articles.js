import React from 'react';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@mui/material';
import styles from '../../styles/ProductCard.module.css';
import AutitoProd from '../../public/images/autitoProd.png'
import iconUSDT from '../../public/images/iconUSDT.png'

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
      </div>
    </ThemeProvider>
  );
}

export default ProductCard;