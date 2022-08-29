import React , { useState , useEffect } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../public/images/full.png'
import Image from 'next/image'
import Formulario from '../components/formulario';

export default function Sell() {
  

    return (
      <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="Versión beta de criptocars" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <ResponsiveAppBar/>
        <div>
          <p className={styles.description}>
            Para publicar tu vehículo en criptocars tendrás que completar y enviar el siguiente formulario.
          </p>
          <p className={styles.description}>
            Tené en cuenta dejar tu mail de contacto de manera correcta asi nos podemos contactar con vos.
          </p>
        </div>

        <div className={styles.grid}>
          <a className={styles.card_form}>
            <h2>Formulario de Venta</h2>
            <p>Completa el siguiente formulario para poder publicar tu vehículo, si todo está en orden nos comunicaremos con vós y procederemos a publicar tu vehículo.</p>
            <Formulario/>
          </a>
        </div>
        

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