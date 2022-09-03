import Head from 'next/head'
import Image from 'next/image'
import AppBarCC from '../components/ResponsiveAppBar/AppBarCC'
import Toolbar from '../components/Toolbar/Toolbar'
import Categories from '../components/Categories/Categories'
import DestArticles from '../components/DestArticles/DestArticles'
import HowOperate from '../components/HowOperate/HowOperate'
import GeneralFooter from '../components/GeneralFooter/GeneralFooter'
import styles from '../styles/Home.module.css'
import Logo from '../public/images/full.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="Versión beta de criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AppBarCC/>      
      <Toolbar/>
      <Categories/>
      <DestArticles/>
      
      <aside id="faQ"> 
        <HowOperate/>         
        <GeneralFooter/>
      </aside>
        <div className={styles.container}>
          <footer className={styles.footer}>
            <a href="https://www.instagram.com/criptocars/" target="_blank" rel="noopener noreferrer">
            <Image src={Logo} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            </a>
          </footer>
        </div>
      
    </div>
  )
}