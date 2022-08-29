import React from 'react';
import styles from '../../styles/Home.module.css'
import Logo from '../../public/images/full.png'
import Image from 'next/image'
import Logos from './Logos.png'
{/* import './GeneralFooter.css';
import LogoDiscord from './discord.png';
import LogoTwitter from './twitter.png';
import LogoInstagram from './instagram.png';
import LogoWhatsapp from './whatsapp.png';
import LogoMail from './email.png'; */}

function GeneralFooter() {
    return (
      <div className={styles.description}>
        <div>
          <p className="Subtitle">Contactate | Trabajá con Nosotros</p>
        </div>
        
            <Image src={Logos} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            
            
            
        {/** <div className='Redes'>
          <a href="https://discord.gg/Wvpzz3yv6m" target="_blank" className="profile__social-link"><img src={LogoDiscord} className="Social-link"></img></a>
          <a href="twitter.com" target="_blank" className="profile__social-link"><img src={LogoTwitter} className="Social-link"></img></a>
          <a href="instagram.com" target="_blank" className="profile__social-link"><img src={LogoInstagram} className="Social-link"></img></a>
          <a href="" target="_blank" className="profile__social-link"><img src={LogoWhatsapp} className="Social-link"></img></a>
          <a href="mailto:info.criptomarket@gmail.com" target="_blank" className="profile__social-link"><img src={LogoMail} className="Social-link"></img></a>
        </div>
        
        <a href="https://www.instagram.com/criptocars/" target="_blank" rel="noopener noreferrer"></a>

        <div>
          <p className={styles.description}>2022 ©</p>
        </div>
        */}
        
        
      </div>
    );
}

export default GeneralFooter;