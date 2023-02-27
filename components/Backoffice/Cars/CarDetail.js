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

    const router = useRouter();
    const API_URL = process.env.API_URL;
    const TOKEN = process.env.TOKEN;
    const [data, setData] = useState(null);
    const { id } = router.query;


    useEffect(() => {
        const fetchDetails = async () => {
            if(!id) {
                return;
            }
            // alert("asd")

            try {
                const get = await axios({
                    method: "get",
                    url: `${API_URL}/v1/post/${id}`,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TOKEN}`,
                    }
                });
                setData(get.data.message);
                setImgSrc(get.data.message.urlimagepost)
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
                                {data.urlimagepost != null && (<ImgStyled src={imgSrc} alt='Profile Pic' />)}
                                <Box>
                                    <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                        Subir nueva foto.
                                        <input
                                            hidden
                                            type='file'
                                            onChange={onChange}
                                            accept='image/png, image/jpeg'
                                            id='account-settings-upload-image'
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
                            <TextField fullWidth label='Nombre' value={data.nameCar} />
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
                        </Grid>
                    </Grid>
                </form>
            </CardContent>)}
        </Container>
    )
}

export default CarDetail
