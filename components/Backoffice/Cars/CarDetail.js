// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Image from "next/image";

import { uploadFile } from "../../firebase";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgStyled = styled("img")(({ theme }) => ({
  width: "50%",
  height: "50%",
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CarDetail = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true);
  const [imgSrc, setImgSrc] = useState("");
  const router = useRouter();
  const API_URL = process.env.API_URL;
  const TOKEN = process.env.TOKEN;
  const [data, setData] = useState(null);
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [carousel, setCarousel] = useState([]);

  const onChange = async (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
      setFile(files[0]);
    }
  };

  const handleDelete = async () => {
    const get = await axios.delete(`/api/v1/products/${id}`);
    window.location.href = "/backoffice";
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (file != null) {
      let result = await uploadFile(file);
      data.image = result;
    }
    const put = await axios.put(`/api/v1/products/${id}`, data);
    setIsLoading(false);
  };

  const _change = (event, value) => {
    setData((data) =>
      Object.assign({}, data, { [event.target.name]: event.target.value })
    );
  };

  const _changevisibility = (event, value) => {
    setData((data) =>
      Object.assign({}, data, { visibility: !data.visibility })
    );
  };

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) {
        return;
      }

      try {
        setIsLoading(true);
        carousel = [];

        const get = await axios({
          method: "get",
          url: `/api/v1/products/${id}`,
        });
        setData(get.data.vehicle);
        let images = [];
        if (Array.isArray(get.data.vehicle.image)) {
          images = get.data.vehicle.image;
        } else {
          images.push(get.data.vehicle.image);
        }
        images.forEach((image, index) => {
          carousel.push(
            <Image
              src={image}
              alt="Autito"
              width="100%"
              height="60%"
              layout="responsive"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
            />
          );
        });
        setCarousel(carousel);
        setImgSrc(get.data.vehicle.image);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <Container>
      {data && !isLoading && (
        <CardContent>
          <form>
            <Grid container spacing={7}>
              <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/*{data.image != null && (<ImgStyled src={imgSrc} alt='Car Pic' />)}*/}
                  <Grid item sm={12} md={7}>
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop={true}
                    >
                      {carousel}
                    </Carousel>
                  </Grid>
                  <Box sx={{ paddingLeft: "20px" }}>
                    <ButtonStyled
                      component="label"
                      variant="contained"
                      htmlFor="car-upload-image"
                    >
                      Subir nueva foto.
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        id="car-upload-image"
                        onChange={onChange}
                      />
                    </ButtonStyled>
                    <ResetButtonStyled
                      color="error"
                      variant="outlined"
                      onClick={() => setImgSrc("/images/avatars/1.png")}
                    >
                      Reiniciar
                    </ResetButtonStyled>
                    {/*<Typography variant='body2' sx={{ marginTop: 5 }}>*/}
                    {/*    Permitido solo imagenes con peso maximo: 1MB*/}
                    {/*</Typography>*/}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                Habilitado
                <Switch
                  checked={data.visibility}
                  onChange={_changevisibility}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Nombre"
                  value={data.name}
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="model"
                  label="Modelo"
                  value={data.model}
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  name="description"
                  label="Breve Descripción"
                  value={data.description}
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  value={data.email}
                  name="email"
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Precio"
                  value={data.price}
                  name="price"
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Ubicacion"
                  value={data.ubication}
                  name="ubication"
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Km"
                  value={data.km}
                  name="km"
                  onChange={_change}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{ marginRight: 3.5 }}
                >
                  Save Changes
                </Button>
                <Button type="reset" variant="outlined" color="secondary">
                  Reset
                </Button>
                <Button
                  onClick={handleOpen}
                  color="error"
                  variant="contained"
                  sx={{ marginLeft: 3.5 }}
                >
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
                <br />
                <Button
                  onClick={handleDelete}
                  variant="outlined"
                  sx={{ marginRight: 3.5 }}
                >
                  ACEPTAR
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  sx={{ marginRight: 3.5 }}
                >
                  CANCELAR
                </Button>
              </Container>
            </Box>
          </Modal>
        </CardContent>
      )}
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
    </Container>
  );
};

export default CarDetail;
