import React from 'react';
import Image from 'next/image'
import vehiculoD1 from './vehiculoD1.png'
import vehiculoD2 from './vehiculoD2.png'
import Button from '@mui/material/Button'
import styles from '../../styles/Home.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import iconUSDT from '../../public/images/iconUSDT.png'
import Link from 'next/link'
import MapMaker from '../../assets/svgs/map-marker.svg'
import { Grid } from '@mui/material';



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
    return (
      <ThemeProvider theme={theme}>
        
        <div className={styles.DestArticles}>
          
          <div className={styles.tabs}>
            <h1 className={styles}>Artículos Destacados</h1>
            <Button variant="contained" href="/products">Ver todos</Button> 
          </div>

            <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Link href="/products">
              <a>
              <div className={styles.containerC}>
                <Image
                  src={vehiculoD1}
                  className="vehiculoD-img"
                  alt="vehiculo-img"
                />
                <div className={styles.imagewrapperC}></div>
                <div className={styles.contentC}>
                  <div className={styles.titlewrapperC}>
                    <div className={styles.leftC}>
                      <div className={styles.productnameC}>
                      <h4>Chevrolet S10</h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.descriptionC}>
                    <p className={styles.descriptiontextC}>
                    2.8 LS 4x4 CD 16V Turbo Diesel 4P Manual.
                    </p>
                  </div>
                  <div className={styles.priceC}>
                    <Image
                      className={styles.iconusdtC}
                      src={iconUSDT}
                      alt="icon usdt"
                    />
                    <p className={styles.pricecurrencyC}>USDT</p>
                    <p className={styles.priceamountC}>$18.000</p>
                  </div>
                  <div className={styles.specificationsC}>
                    <p className={styles.specificationyearC}>2021</p>{" "}
                    <p className={styles.specificationdistanceC}>
                      50.000 km
                    </p>{" "}
                  </div>
                  <div className={styles.locationC}>
                    <Image
                      src={MapMaker}
                      className={styles.locationiconC}
                      alt="map marker icon"
                    />
                    <p className={styles.locationtextC}>
                      Santa Cruz, Argentina
                    </p>{" "}
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/products">
            
            <a>
              <div className={styles.containerC}>
                <Image
                  src={vehiculoD2}
                  className="vehiculoD-img"
                  alt="vehiculo-img"
                />
                <div className={styles.imagewrapperC}></div>
                <div className={styles.contentC}>
                  <div className={styles.titlewrapperC}>
                    <div className={styles.leftC}>
                      <div className={styles.productnameC}>
                      <h4 className="Subtitle">Toyota Hilux</h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.descriptionC}>
                    <p className={styles.descriptiontextC}>
                      2.8 STD 4x4 CD Diesel 4P Manual.
                    </p>
                  </div>
                  <div className={styles.priceC}>
                    <Image
                      className={styles.iconusdtC}
                      src={iconUSDT}
                      alt="icon usdt"
                    />
                    <p className={styles.pricecurrencyC}>USDT</p>
                    <p className={styles.priceamountC}>21.000</p>
                  </div>
                  <div className={styles.specificationsC}>
                    <p className={styles.specificationyearC}>2020</p>{" "}
                    <p className={styles.specificationdistanceC}>
                      24.000 km
                    </p>{" "}
                  </div>
                  <div className={styles.locationC}>
                    <Image
                      src={MapMaker}
                      className={styles.locationiconC}
                      alt="map marker icon"
                    />
                    <p className={styles.locationtextC}>
                      Buenos Aires, Argentina
                    </p>{" "}
                  </div>
                </div>
              </div>
            </a>
          </Link>
          
          </Grid>
          </div>
      </ThemeProvider>
    );
}

export default DestArticles;