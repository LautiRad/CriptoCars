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
        <div className={styles.main}>
            <div>
                <h1 className={styles.title}>Catálogo</h1>
                <Button variant="contained" href="/products">Ver Vehiculos Disponibles</Button>
            </div>
            
            <div className={styles.grid}>
            <Link href="/products">
                <a className={styles.card}>
                    <h2>Pick Up</h2>
                    <Image src={vehiculo1} className="vehiculo-img" alt="vehiculo-img" />
                </a>
            </Link>

            <Link href="/products">
                <a className={styles.card}>
                    <h2>Coupé</h2>
                    <Image src={vehiculo4} className="vehiculo-img" alt="vehiculo-img" />
                </a>
            </Link>

            <Link href="/products">
                <a className={styles.card}>
                    <h2>Sedán</h2>
                    <Image src={vehiculo2} className="vehiculo-img" alt="vehiculo-img" />
                </a>
            </Link>

            <Link href="/products">
                <a className={styles.card}>
                    <h2>Hatchback</h2>
                    <Image src={vehiculo3} className="vehiculo-img" alt="vehiculo-img" />
                </a>
            </Link>
            </div>
        </div>
        </ThemeProvider>
    );
}
export default Categories;