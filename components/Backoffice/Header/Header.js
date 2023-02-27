import { Container, Typography } from '@mui/material';
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/full.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles"

export default function Header() {
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

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" >
                <Container maxWidth="xl" sx={{ display: { xs: "block", md: "block"}, padding: "10px"}}>
                    <Toolbar disableGutters>
                        <Link href="/" rel="noopener noreferrer">
                            <Image
                                src={Logo}
                                alt="Logo"
                                sx={{ display: { xs: "none", md: "flex" } }}
                            />
                        </Link>
                        <Link href={`/backoffice/`} >
                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex", paddingLeft: '3em' }, justifyContent: 'end', alignItems: 'center'}}>
                                <Typography textAlign="center" variant="h5" sx={{cursor: "pointer"}}>
                                    BACKOFFICE
                                </Typography>
                            </Box>

                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
