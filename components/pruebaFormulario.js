import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form} from "formik";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { uploadFile } from "./firebase"
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Formulario() {
  const [formSend, setFormSend] = useState(false);
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

  const ImgStyled = styled('img')(({ theme }) => ({
    width: '50%',
    height: '50%',
    marginRight: theme.spacing(6.25),
    borderRadius: theme.shape.borderRadius
  }))

  const initialValuesML = {
    link: "",
  }

  const initial = {
    id: "",
    name: "",
    description: "",
    model: "",
    km: "",
    price: "",
    ubication: "",
    email: "",
    image: "",
    message: "",
    status: "Draft",
  };
  const [initialValues, setInitial] = useState(initial);

  const validateML = (value) => {
    let errors = {};
    if (!value.link) {
      errors.link = "Por favor ingresa un link de un producto";
    }
    return errors;
  }

  const valueFromMap = (map, key) => {
    if(map===undefined)
      return "";
    else
      return map[key] + " ";
  }

  const handleSubmitML = async (value) => {
    setLoad(false)
    let productId = value.link.split("-")[1];
    const response = await axios.get('https://api.mercadolibre.com/items/MLA'+productId);
    const map = new Map();
    if(response.status===200){
      response.data.attributes.map((attribute) => map.set(attribute.id, {'name':attribute.name, 'value':attribute.value_name, 'value_struct':attribute.value_struct}));
    }
    initialValues.ubication = response.data.location.neighborhood.name + " " +response.data.location.state.name
    initialValues.name = valueFromMap(map.get("BRAND"),"value") + " " + valueFromMap(map.get("MODEL"),"value")
    initialValues.model = valueFromMap(map.get("VEHICLE_YEAR"),"value")
    initialValues.km = map.get("KILOMETERS")===undefined?"":map.get("KILOMETERS").value_struct.number
    initialValues.description = valueFromMap(map.get("VEHICLE_BODY_TYPE"),"value") +
                                valueFromMap(map.get("TRIM"),"value") +
                                valueFromMap(map.get("ITEM_CONDITION"),"value") +
                                valueFromMap(map.get("COLOR"),"value") +
                                // valueFromMap(map.get("TRACTION_CONTROL"),"name") +
                                // valueFromMap(map.get("TRACTION_CONTROL"),"value") +
                                valueFromMap(map.get("ENGINE_DISPLACEMENT"),"value") +
                                valueFromMap(map.get("ENGINE"),"value") +
                                valueFromMap(map.get("POWER"),"value") +
                                valueFromMap(map.get("KILOMETERS"),"value") +
                                valueFromMap(map.get("DOORS"),"value") +
                                valueFromMap(map.get("DOORS"),"name")
    initialValues.image = response.data.pictures[0].url
    setLoad(true)
  }

  const manualLoad = async () => {
    setLoad(true)
  }


  const validate = (value) => {
    let errors = {};
      if (!value.name) {
        errors.name = "Por favor ingresa un nombre";
      } else if (!/^[a-zA-ZÀ-ÿ0-9_.+\s]{1,40}$/.test(value.name)) {
        errors.name = "El nombre solo puede contener letras y espacios";
      }
      if (!value.description) {
        errors.description = "Por favor ingresa una descripcion";
      } else if (!/^[a-zA-ZÀ-ÿ0-9_.+\-\s]{1,100}$/.test(value.description)) {
        errors.description =
          "La descripcion solo puede contener número, letras y espacios";
      }
      if (!value.model) {
        errors.model = "Por favor ingresa un modelo";
      } else if (!/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/.test(value.model)) {
        errors.model = "El Año del modelo solo puede contener numeros";
      }
      if (value.km==='') {
        errors.km = "Por favor ingresa un km";
      } else if (!/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/.test(value.km)) {
        errors.km = "El Año del modelo solo puede contener numeros";
      }
      if (!value.price) {
        errors.price = "Por favor ingresa un precio";
      } else if (!/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/.test(value.price)) {
        errors.price = "El nombre solo puede contener letras y espacios";
      }
      if (!value.ubication) {
        errors.ubication = "Por favor ingresa una ubicación";
      } else if (!/^[a-zA-ZÀ-ÿ0-9_.+\s]{1,40}$/.test(value.ubication)) {
        errors.ubication = "El nombre solo puede contener letras, números y espacios";
      }
      if (!value.email) {
        errors.email = "Por favor ingresa un correo electronico";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.email)
      ) {
        errors.email =
          "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
      }
    return errors;
  };

  const handleSubmit = async (value) => {
    try {
      let result;
      if(initialValues.image === ''){
        result = await uploadFile(file);
      }else{
        result = initialValues.image
      }

      console.log(result);
      const dataPost = {
        name: value.name,
        description: value.description,
        model: value.model,
        km: value.km,
        price: value.price,
        ubication: value.ubication,
        email: value.email,
        message: value.message,
        image: result,
        status: "Draft",
        visibility: false
      };
      const response = await axios.post('/api/v1/products', dataPost);
      setFormSend(true);
      setTimeout(() => setFormSend(false), 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
          initialValues={initialValuesML}
          validate={validateML}
          onSubmit={handleSubmitML}
      >
        {({ errors }) => (
            <Form className={styles.formulario}>
              <div>
                <label htmlFor="link">Link:</label>
                <Field
                    type="text"
                    id="link"
                    name="link"
                    placeholder="https://auto.mercadolibre.com.ar/MLA-1353485815-ford-ka-10-negro-3p-unico-dueno-75k-ruedas-nuevas-_JM#position=1&search_layout=grid&type=item&tracking_id=3eb406fc-6f30-484e-a299-d0829f36dbb5"
                />
                <ErrorMessage
                    name="link"
                    component={() => (
                        <div className={styles.error}>{errors.link}</div>
                    )}
                />
              </div>
              <button type="submit">Carga Mercadolibre</button>
              <br/>
              <button type="reset" onClick={manualLoad}>Carga Manual</button>

              {formSend && (
                  <p className={styles.exito}>Formulario enviado con éxito!</p>
              )}
            </Form>
        )}
      </Formik>
      {load && (<Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div>
              <label htmlFor="name">Marca y Modelo:</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Chevrolet S10"
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className={styles.error}>{errors.name}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="description">Breve Descripción: </label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="2.8 LS 4x4 CD 16V Turbo Diesel 4P Manual."
              />
              <ErrorMessage
                name="description"
                component={() => (
                  <div className={styles.error}>{errors.description}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="">Año: </label>
              <Field type="number" id="model" name="model" placeholder="2021" />
              <ErrorMessage
                name="model"
                component={() => (
                  <div className={styles.error}>{errors.model}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="km">Kilometraje: </label>
              <Field type="number" id="km" name="km" placeholder="35000" />
              <ErrorMessage
                name="km"
                component={() => (
                  <div className={styles.error}>{errors.km}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="price">Precio: (Expresado en USDT) </label>
              <Field type="text" id="price" name="price" placeholder="21500" />
              <ErrorMessage
                name="price"
                component={() => (
                  <div className={styles.error}>{errors.price}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="ubication">Ubicación: </label>
              <Field
                type="text"
                id="ubication"
                name="ubication"
                placeholder="El Chaltén, Santa Cruz, Argentina."
              />
              <ErrorMessage
                name="ubication"
                component={() => (
                  <div className={styles.error}>{errors.ubication}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="email">Mail de contacto: </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="micorreo@criptocars.com"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className={styles.error}>{errors.email}</div>
                )}
              />
            </div>
            {initialValues.image != '' && (<div>
              <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImgStyled src={initialValues.image} alt='Car Pic' />
                </Box>
              </Grid>
            </div>)}
            {initialValues.image == '' && (<div>
              <label htmlFor="image">Imagen: </label>
              <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(value) => setFile(value.currentTarget.files[0])}
              />
            </div>)}
            <div>
              <Field
                name="message"
                as="textarea"
                placeholder="Mensaje o comentario que quieras agregar.."
              />
            </div>

            <button type="submit">Enviar</button>
            {formSend && (
              <p className={styles.exito}>Formulario enviado con exito!</p>
            )}
          </form>
        )}
      </Formik>)}
    </>
  );
}
