import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Logo from '../../public/images/full.png';
import Rainbow from '../Rainbow/Rainbow';
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles'

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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary" enableColorOnDark>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link href="/" rel="noopener noreferrer">
            <Image src={Logo} alt="Logo" sx={{ display: { xs: 'none', md: 'flex' }}}/>
          </Link>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link href="/products" rel="noopener noreferrer">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Productos
              </Button>
          </Link>
          <Link href="/sell" rel="noopener noreferrer">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Vender
            </Button>
          </Link>
          <Link href="/#faQ" rel="noopener noreferrer">
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Preguntas
            </Button>
          </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Rainbow/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;