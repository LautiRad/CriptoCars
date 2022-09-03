import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../public/images/full.png";
import Rainbow from "../Rainbow/Rainbow";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

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
  { name: "Productos", url: "./products" },
  { name: "Vender", url: "./sell" },
  { name: "Preguntas frecuentes", url: "./#faQ" }
];

const AppBarCC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [reedirigir, setReedirigir] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log("ay me tocaste ahi abajo")
    setAnchorElNav(event.currentTarget);
  };
  //  const handleOpenUserMenu = (event) => {
  //    setAnchorElUser(event.currentTarget);
  //  };

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
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                      <Typography textAlign="center">
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                 <Typography textAlign="center" onClick={()=>redirect(page.url)}>
                        {page.name}
                      
                 </Typography>
                </Button>
              ))}

            <Box sx={{ flexGrow: 0 }}></Box>
            <Rainbow />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default AppBarCC;
