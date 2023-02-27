import { Container } from '@mui/material';
import CarDetail from '../../components/Backoffice/Cars/CarDetail.js';
import Header from '../../components/Backoffice/Header/Header.js';


export default function Car() {
    return (
        <>
            <Header/>
            <Container>
                <CarDetail/>
            </Container>
        </>
    );
}
