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
import { Grid } from '@mui/material'

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
            <Grid container mt={2} spacing='4'>
                <Grid item xs={1} md={2}></Grid>
                <Grid item xs={2.5} md={2}>
                    <Link href="/products">
                        <div className={styles.cardsCategories}>
                            <Image src={vehiculo1} objectFit="cover" alt="vehiculo-img" width={240} height={180} style={{borderRadius: '10px'}}/>
                            <p>Pick Up</p>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={2.5} md={2}>
                    <Link href="/products">
                        <div className={styles.cardsCategories}>
                            <Image src={vehiculo2} objectFit="cover" alt="vehiculo-img" width={240} height={180} style={{borderRadius: '10px'}}/>
                            <p>Sedán</p>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={2.5} md={2}>
                <Link href="/products">
                    <div className={styles.cardsCategories}>
                        <Image src={vehiculo4} objectFit="cover" alt="vehiculo-img" width={240} height={180} style={{borderRadius: '10px'}}/>
                        <p>Coupé</p>
                    </div>
                </Link>
                </Grid>
                <Grid item xs={2.5} md={2}>
                <Link href="/products">
                    <div className={styles.cardsCategories} >
                        <Image src={vehiculo3} objectFit="cover" alt="vehiculo-img" width={240} height={180} style={{borderRadius: '10px'}}/>
                        <p>Hatchback</p>
                    </div>
                </Link>
                </Grid>
            </Grid>
            <div className={styles.grid}>
            </div>
        </div>
        </ThemeProvider>
    );
}
export default Categories;