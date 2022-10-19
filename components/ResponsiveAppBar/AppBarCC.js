import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Image from "next/image"
import Rainbow from "../Rainbow/Rainbow"
import Link from "next/link"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Logo from '../../public/images/full.svg'

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ED1848",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const pages = [
  { name: "Vehículos", url: "./products" },
  { name: "Vender", url: "./sell" },
  { name: "Ayuda", url: "./#faQ" }
];

const AppBarCC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const redirect = (url) => {
    location.href = url;
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link href={page.url}>
                      <Typography textAlign="center" textTransform="capitalize">
                        {page.name}
                      
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link href="/" rel="noopener noreferrer">
              <Image
                src={Logo}
                alt="Logo"
                sx={{ display: { xs: "none", md: "flex" } }}
              />
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: 'row-reverse',
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", paddingLeft: '3em' }, justifyContent: 'end', alignItems: 'center'}}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", textTransform: 'capitalize', mr: 1 }}
                >
                <Typography textAlign="center" onClick={()=>redirect(page.url)} fontSize= '14px'>
                        {page.name}
                      
                      </Typography>
                </Button>
              ))}
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex"}, gap: 2, justifyContent: 'end', marginLeft: '24px', marginRight: '16px'}}>
                <Typography variant="span" textAlign="center" onClick={()=>redirect('/')} fontSize= '14px' sx={{ cursor: 'pointer',my: 4, color: "white", display: "block", alignItems: 'center', justifyContent: 'center'}}>
                  <FavoriteBorderIcon sx={{fontSize: '18px'}}/>
                </Typography>
                <Typography textAlign="center" onClick={()=>redirect('/')} fontSize= '14px' sx={{ cursor: 'pointer', my: 4, color: "white", display: "block", alignItems: 'center', justifyContent: 'center'}}>
                  <PermIdentityIcon sx={{fontSize: '18px'}}/>
                </Typography>
              </Box>
            </Box>          
            <Rainbow />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default AppBarCC;
