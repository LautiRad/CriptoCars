import React from 'react';
import Image from 'next/image'
import vehiculoD1 from './vehiculoD1.png'
import vehiculoD2 from './vehiculoD2.png'
import Button from '@mui/material/Button'
import styles from '../../styles/Home.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import iconUSDT from '../../public/images/iconUSDT.png'
import Link from 'next/link'



function DestArticles() {
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
        <div className={styles.DestArticles}>
        <div className={styles}>
        <h1 className={styles.title}>
        Artículos Destacados
        </h1>
        <div className={styles.DestBtn}>
          <Button variant="contained" href="/products">Proximamente..</Button>
        </div>
        </div>
        <div className={styles.grid}>
        <Link  href="/products">
          <a className={styles.card_product}>
            <Image src={vehiculoD1} className="vehiculoD-img" alt="vehiculo-img" />
              <h4 className="Subtitle">Chevrolet S10</h4>
              <p>2.8 LS 4x4 CD 16V Turbo Diesel 4P Manual.</p>
              <p>2019</p>
              <p>54.300 km</p>
              <p><Image src={iconUSDT} className="USDT-img" alt="img" /> $18.000</p>
              <p>Vicente López, Provincia de Buenos Aires.</p>
              <Button variant="contained">Comprar</Button>
            </a>
          </Link>
          <Link href="/products">
            <a className={styles.card_product}>
            <Image src={vehiculoD2} className="vehiculoD-img" alt="vehiculo-img" />
              <h4 className="Subtitle">Toyota Hilux</h4>
              
              <p>Detalles: 2.8 STD 4x4 CD Diesel 4P Manual</p>
              <p>2020</p>
              <p>24.000 km</p>
              <p><Image src={iconUSDT} className="USDT-img" alt="img" /> $24.000</p>
              <p>La Plata, Provincia de Buenos Aires</p>
              <Button variant="contained">Comprar</Button>
            </a>
          </Link>          
          </div>
      </div>
    </ThemeProvider>
    );
}

export default DestArticles;