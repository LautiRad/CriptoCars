import React, { useState, useEffect } from "react";
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Logo from "../public/images/full.png";
import Image from "next/image";
import Formulario from "../components/formulario";
import LogoNegro from '../public/images/fullNegro.png'
import HowOperate from '../components/HowOperate/HowOperate'
import GeneralFooter from '../components/GeneralFooter/GeneralFooter'

export default function Sell() {
  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="Versión beta de criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AppBarCC />
      <br></br>

      <div className={styles.grid}>
        <div className={styles.sell_form}>
          <a className={styles.card_form}>
            <h2>Formulario de Venta</h2>
            <br />
            <p>
              Para publicar tu vehículo en criptocars tendrás que completar y
              enviar el siguiente formulario.
            </p>
            <br />
            <p>
              Tené en cuenta dejar tu mail de contacto de manera correcta asi
              nos podemos contactar con vos.
            </p>
            <br />
            <p>
              Completa el siguiente formulario para poder publicar tu vehículo,
              si todo está en orden nos comunicaremos con vós y procederemos a
              publicar tu vehículo.
            </p>
            <Formulario />
          </a>
        </div>
      </div>

      <div className={styles.container}>
      <aside> 
        <HowOperate/>         
        <GeneralFooter/>
        </aside> 
        <div className={styles.container}>
          <footer className={styles.footer}>
            <a href="https://www.instagram.com/criptocars/" target="_blank" rel="noopener noreferrer">
            <Image src={LogoNegro} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
