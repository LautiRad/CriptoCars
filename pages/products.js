import React , {useState , useEffect} from 'react'
import AppBarCC from '../components/ResponsiveAppBar/AppBarCC'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from '../public/images/full.png'
import Image from 'next/image'
import AutitoProd from '../public/images/autitoProd.png'
import iconUSDT from '../public/images/iconUSDT.png'
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ProductCard from '../components/Articles/ProductCard'

export default function Products() {
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
  
  const [data, setData] = useState(null)

  const fetchProducts = async() => {
    let myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjYyMDU5NDU3LCJleHAiOjE2NjI2NjQyNTd9.HMTPnA0QuAQNXBHnUhiADOQzhFKwH11R738h1SOM8Zo'
      
  });
    
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
  
    const res = await fetch(
      'URL_GET', 'https://criptocar-api.azurewebsites.net/api/v1/post',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        setData(result.message);
        return result;
      })
      .catch(error => console.log('error', JSON.stringify(error)));
    return res;
  };
  
  useEffect(()=>{
    fetchProducts()
    },[])

  console.log(data);
    return (
      <ThemeProvider theme={theme}>
        <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="Versión beta de criptocars" />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <AppBarCC/>
        
        <ProductCard/>
        <div className={styles.grid}>
        {data && data.map((element)=>{
                  return (
                    <div key={element} className={styles.containerC}>
                      <div className={styles.imagewrapperC}>
                        <Image
                          className={styles.imageC}
                          src={AutitoProd}
                          alt="Autito"
                        />
                      </div>
                      <div className={styles.contentC}>
                        <div className={styles.titlewrapperC}>
                          <div className={styles.leftC}>
                            <Image
                              className={styles.iconC}
                              src={iconTool}
                              alt="icon tool"
                            />
                            <div className={styles.productnameC}>
                              <p>Fiat 500</p>
                              <p>{element.name}</p> */
                            </div>
                          </div>
                          <Image
                            className={styles.iconC}
                            src={Heart}
                            alt="icon heart"
                          />
                        </div>
                        <div className={styles.descriptionC}>
                          <p className={styles.descriptiontextC}>
                            1.4 Cult 8v. Nafta. 2P Automático
                          </p>
                          <p>{element.descriptionC}</p> */
                        </div>
                        <div className={styles.priceC}>
                          <Image
                            className={styles.iconusdtC}
                            src={iconUSDT}
                            alt="icon usdt"
                          />
                          <p className={styles.pricecurrencyC}>USDT</p>
                          <p className={styles.priceamountC}>5.000</p>
                          <p>{element.price}</p>
                        </div>
                        <div className={styles.specificationsC}>
                          <p className={styles.specificationyearC}>2012</p>{" "}
                          <p>{element.year}</p>
                          <p className={styles.specificationdistanceC}>
                            92.000 km
                          </p>{" "}
                          <p>{element.distance}</p> */
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
                          <p>{element.ubication}</p>
                        </div>
                      </div>
                    </div>
                  );
      })} 
        </div>
        
          <div className={styles.container}>
            <footer className={styles.footer}>
              <Link href="https://www.instagram.com/criptocars/"><a target="_blank" rel="noopener noreferrer">
              <Image src={Logo} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
              </a>
              </Link>
            </footer>
          </div>
        </div>
      </ThemeProvider>
    )
  }



   {/*           DEJO ACÁ COMENTADA LA CARD QUE ESTA LIGADA AL GET

              <div className={styles.grid}>
                {data && data.map((element)=>{
                  return(
                  <div className={styles.card_product}>
                    <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                    <p>{element.name}</p>
                    <p>{element.description}</p>
                    <p>{element.model}</p>
                    <p>{element.km}</p>
                    <p><Image src={iconUSDT} />${element.price}</p>
                    <p>{element.ubication}</p>
                    <Link href="/products">
                      <Button variant="contained">Comprar</Button>
                    </Link>
                  </div>
              )

                  Y ACÁ EN ESTA PARTE LA CARD HARCODEADA
                  <div className={styles.card_product}>
                    <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                    <p>Fiat 500</p>
                    <p>1.4 Cult 8v. Nafta. 2P Automático</p>
                    <p>2015</p>
                    <p>102.300 km</p>
                    <p><Image src={iconUSDT} alt="LogoUSDT" />$5300</p>
                    <p>Vicente López, Provincia de Buenos Aires.</p>
                    <Link href="/products">
                      <Button variant="contained">Comprar</Button>
                    </Link>
                  </div>
            })} 
          
          
          
          
          
          
          
          /////////////////////
        
        
        
         <div className={styles.grid}>
              {data && data.map((element)=>{
                return(
                <div className={styles.card_product}>
                  <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                  <p>{element.name}</p>
                  <p>{element.description}</p>
                  <p>{element.model}</p>
                  <p>{element.km}</p>
                  <p><Image src={iconUSDT} />${element.price}</p>
                  <p>{element.ubication}</p>
                  <Link href="/products">
                    <Button variant="contained">Comprar</Button>
                  </Link>
                </div>
            )
                
          })}*/}