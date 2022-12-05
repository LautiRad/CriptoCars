import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import Image from 'next/image';
import Logo from "../../public/images/full.png";
import Instagram from "./instagram.png"
import Twitter from "./twitter.png"
import Discord from "./discord.png"

function GeneralFooter() {
    return (
      <div className={styles.containerFooter}>
      {/* <div className={styles.footer}>
          <div className={styles.footerSocial}>
            <a href="https://www.instagram.com/criptocars/" target="_blank" rel="noopener noreferrer">
            <Image
              src={Instagram}
              alt="TwitterLogo"
              height="56px"
              width="56px"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </a>
          <a href="https://discord.gg/9RT2CzeGxp" target="_blank" rel="noopener noreferrer">
            <Image
              src={Discord}
              alt="TwitterLogo"
              height="56px"
              width="56px"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </a>
          <a href="https://twitter.com/paydece" target="_blank" rel="noopener noreferrer">
            <Image
              src={Twitter}
              alt="TwitterLogo"
              height="56px"
              width="56px"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </a>
          </div>
      </div> */}
      <div className={styles.footer2}>
          <p className={styles.footer2}>2022 Todos los derechos reservados</p>
          <Link href="/" rel="noopener noreferrer">
            <Image
              src={Logo}
              alt="Logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
      </div>
    </div>
    );
}

export default GeneralFooter;