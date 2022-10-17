import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import Image from 'next/image';
import Logo from "../../public/images/full.png";
import InstagramIcon from '@mui/icons-material/Instagram';

function GeneralFooter() {
    return (
      <div className={styles.containerFooter}>
      <div className={styles.footer}>
          <Link href="/" rel="noopener noreferrer">
            <Image
              src={Logo}
              alt="Logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          </Link>
          <div>
           <InstagramIcon color="white" fontSize="large" />
          </div>
      </div>
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