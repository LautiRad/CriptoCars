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

  /*const fetchProducts = async() => {
    let myHeaders = new Headers({
      'Authorization': '', 
      'Content-Type': 'application/json'
  });
    
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
  
    const res = await fetch(
      'https://criptocars-api.herokuapp.com/api/v1/post',
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
  */
    return (
      <ThemeProvider theme={theme}>
        <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="Versión beta de criptocars" />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <AppBarCC/>
        <div className={styles.card_product}>
                    <Image src={AutitoProd} className={styles.autitoimg} alt="autito-img" />
                    <p>Fiat 500</p>{/* <p>{element.name}</p> */}
                    <p>1.4 Cult 8v. Nafta. 2P Automático</p>{/* <p>{element.description}</p> */}
                    <p>2015</p>{/* <p>{element.model}</p> */}
                    <p>102.300 km</p>{/* <p>{element.km}</p> */}
                    <p><Image src={iconUSDT} alt="LogoUSDT" />$5300</p>{/* <p><Image src={iconUSDT} />${element.price}</p> */}
                    <p>Vicente López, Provincia de Buenos Aires.</p>{/* <p>{element.ubication}</p> */}
                    <Link href="/products">
                      <Button variant="contained">Comprar</Button>
                    </Link>
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