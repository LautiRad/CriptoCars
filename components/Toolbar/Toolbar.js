import React from 'react'
import Image from 'next/image'
import ImgHero from '../Toolbar/img.png'
import styles from '../../styles/Home.module.css'
import Loguito from '../../public/images/paydeceLoguito.png'

function Toolbar() {
    return(
    <div className={styles.toolbar}/** */>
        <Image className={ImgHero} src={ImgHero} alt="Img" />
        <div className={styles.hero}>
        <h1 className={styles.title}>Bienvenido a <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/criptocars/">criptocars</a></h1>
        
        <p className={styles.description}>Comprá de forma segura con criptomonedas.</p>
        <p className={styles.description}>
          Utilizamos {'     '}
          <a
          href="https://paydece.io/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image src={Loguito} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          </a> {'     '} como medio de pago, para brindarte una mayor seguridad.
        </p>
        </div>
    </div>
    );
}

export default Toolbar;