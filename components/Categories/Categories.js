import React from 'react';
import Image from 'next/image'
import vehiculo1 from '../Categories/vehiculo1.png'
import vehiculo2 from '../Categories/vehiculo2.png'
import vehiculo3 from '../Categories/vehiculo3.png'
import vehiculo4 from '../Categories/vehiculo4.png'
import Link from 'next/link'
import Button from '@mui/material/Button'
import styles from '../../styles/Home.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

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

function Categories() {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <div className={styles.tabs}>
                <h1 className={styles.title}>Catálogo</h1>
                <Button variant="contained" href="/products">Ver todos</Button>
            </div>
            
            <div className={styles.grid}>
            <Link href="/products">
                <div className={styles.card}>
                    <Image src={vehiculo1} objectFit="cover" alt="vehiculo-img" />
                    <h2>Pick Up</h2>
                </div>
            </Link>

            <Link href="/products">
                <div className={styles.card}>
                    <Image src={vehiculo4} objectFit="cover" alt="vehiculo-img" />
                    <h2>Coupé</h2>
                </div>
            </Link>

            <Link href="/products">
                <div className={styles.card}>
                    <Image src={vehiculo2} objectFit="cover" alt="vehiculo-img" />
                    <h2>Sedán</h2>
                </div>
            </Link>

            <Link href="/products">
                <div className={styles.card}>
                    <Image src={vehiculo3} objectFit="cover" alt="vehiculo-img" />
                    <h2>Hatchback</h2>
                </div>
            </Link>
            </div>
        </div>
        </ThemeProvider>
    );
}
export default Categories;