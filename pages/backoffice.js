import { Container, Stack, Typography } from '@mui/material';
import CarList from '../components/Backoffice/Cars/CarList.js';

export default function CarPage() {
    return (
        <>
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Cars
                </Typography>
                <CarList />
            </Container>
        </>
    );
}
