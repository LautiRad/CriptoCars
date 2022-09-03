import React from 'react'
import styles from '../../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import imgHero from "../../public/images/hero/hero.png"



function Toolbar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.55),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.3),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }));

    return(
    <div className={styles.toolbar}>
      <Image src={imgHero}
            layout="fill"
            objectFit="contain"
            alt="imgHero"/>
        <div className={styles.hero}>
        <h1 className={styles.title}>Comprá tu auto de forma segura con criptomonedas.</h1>
        <br/>
        {/* SearchBar */}
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Escribí marca o modelo del vehículo que buscas..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <p className={styles.description}>
            Utilizamos como medio de pago, el Escrow de paydece.io para brindarte una mayor seguridad
          </p>
        </div>
    </div>
    );
}

export default Toolbar;