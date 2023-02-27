import { Container, Stack, Typography } from '@mui/material';
import CarList from '../components/Backoffice/Cars/CarList.js';
import Header from '../components/Backoffice/header/Header.js';
import * as React from "react";

export default function CarPage() {
    return (
        <>
            <Header />
            <Container sx={{ display: { xs: "block", md: "block"}}}>
                <Typography variant="h4" sx={{ mb: 5 , mt: 5    }}>
                    Cars
                </Typography>
                <CarList />
            </Container>
        </>
    );
}
