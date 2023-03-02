// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from "axios";
import Modal from '@mui/material/Modal';

const ImgStyled = styled('img')(({ theme }) => ({
    width: '50%',
    height: '50%',
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4.5),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    }
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CarDetail = () => {
    // ** State
    const [openAlert, setOpenAlert] = useState(true)
    const [imgSrc, setImgSrc] = useState('')

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }

    const handleDelete = async () => {
        const get = await axios.delete(`/api/v1/products/${id}`)
        window.location.href = '/backoffice';
    };

    const router = useRouter();
    const API_URL = process.env.API_URL;
    const TOKEN = process.env.TOKEN;
    const [data, setData] = useState(null);
    const { id } = router.query;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchDetails = async () => {
            if(!id) {
                return;
            }
            // alert("asd")

            try {
                const get = await axios({
                    method: "get",
                    url: `/api/v1/products/${id}`,
                });
                setData(get.data.vehicle);
                setImgSrc(get.data.vehicle.image)
                console.log(get.data.vehicle.image);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetails();
    }, [id]);

    return (
        <Container>
            {data && (<CardContent>
                <form>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {data.image != null && (<ImgStyled src={imgSrc} alt='Car Pic' />)}
                                <Box>
                                    <ButtonStyled component='label' variant='contained' htmlFor='car-upload-image'>
                                        Subir nueva foto.
                                        <input
                                            hidden
                                            type='file'
                                            onChange={onChange}
                                            accept='image/png, image/jpeg'
                                            id='car-upload-image'
                                        />
                                    </ButtonStyled>
                                    <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                                        Reiniciar
                                    </ResetButtonStyled>
                                    {/*<Typography variant='body2' sx={{ marginTop: 5 }}>*/}
                                    {/*    Permitido solo imagenes con peso maximo: 1MB*/}
                                    {/*</Typography>*/}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Nombre' value={data.name} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Modelo' value={data.model} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Breve Descripción' value={data.description} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type='email'
                                label='Email'
                                value={data.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Status</InputLabel>
                                <Select label='Status' defaultValue='active'>
                                    <MenuItem value='draft'>Draft</MenuItem>
                                    <MenuItem value='draft'>Draft</MenuItem>
                                    <MenuItem value='draft'>Draft</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Precio' value={data.price} />
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant='contained' sx={{ marginRight: 3.5 }}>
                                Save Changes
                            </Button>
                            <Button type='reset' variant='outlined' color='secondary'>
                                Reset
                            </Button>
                            <Button onClick={handleOpen} color='error' variant='contained' sx={{ marginLeft: 3.5 }}>
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Container>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                ¿Esta seguro de querer eliminar el auto?
                            </Typography>
                            <br/>
                            <Button onClick={handleDelete} variant='outlined' sx={{ marginRight: 3.5 }}>
                                ACEPTAR
                            </Button>
                            <Button onClick={handleClose} variant='outlined' sx={{ marginRight: 3.5 }}>
                                CANCELAR
                            </Button>
                        </Container>
                    </Box>
                </Modal>
            </CardContent>)}
        </Container>

    )
}

export default CarDetail
