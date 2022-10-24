import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import bg from './overlayLauti.png'


function Toolbar() {

    return(
      
    <div className={styles.toolbar}>

        <div className={styles.hero}>
        <div>
          <Image src={bg} alt="bg" responsive />
          
        </div>
        <div className={styles.heroContent}>
        <h1>Comprá tu auto de forma segura con criptomonedas.</h1>
          </div>
        </div>
    </div>
    );
}

export default Toolbar;