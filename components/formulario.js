import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import styles from "../styles/Home.module.css";
//Enviroments vars
const API_URL = process.env.API_URL;
const TOKEN = process.env.TOKEN;

export default function Formulario() {
  const [formSend, setFormSend] = useState(false);
  let filebase64;
  const sendData = async (data) => {
    try {
      const post = await axios({
        method: "post",
        url: `${API_URL}/v1/post`,
        data: data,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      console.log(post, "se envio");
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    id: "",
    nameCar: "",
    description: "",
    model: "",
    km: "",
    price: "",
    ubication: "",
    email: "",
    img: "",
    message: "",
  };

  const validate = (value) => {
    let errors = {};
    {
      // Validacion nombre
      if (!value.nameCar) {
        errors.nameCar = "Por favor ingresa un nombre";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.nameCar)) {
        errors.nameCar = "El nombre solo puede contener letras y espacios";
      }
      // Validacion marca
      if (!value.model) {
        errors.model = "Por favor ingresa una marca";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.model)) {
        errors.model = "El nombre solo puede contener letras y espacios";
      }
      // Validacion descripcion
      if (!value.descripcion) {
        errors.descripcion = "Por favor ingresa una descripcion";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.descripcion)) {
        errors.descripcion =
          "La descripcion solo puede contener letras y espacios";
      }
      // Validacion model
      if (!value.model) {
        errors.model = "Por favor ingresa un modelo";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.model)) {
        errors.model = "El Año del modelo solo puede contener numeros";
      }
      // Validacion km
      if (!value.km) {
        errors.km = "Por favor ingresa un km";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.km)) {
        errors.km = "El nombre solo puede contener letras y espacios";
      }

      // Validacion precio
      if (!value.precio) {
        errors.precio = "Por favor ingresa un precio";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.precio)) {
        errors.precio = "El nombre solo puede contener letras y espacios";
      }
      // Validacion ubicacion
      if (!value.ubicacion) {
        errors.ubicacion = "Por favor ingresa una ubicación";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.ubicacion)) {
        errors.ubicacion = "El nombre solo puede contener letras y espacios";
      }
      // Validacion correo
      if (!value.correo) {
        errors.correo = "Por favor ingresa un correo electronico";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.correo)
      ) {
        errors.correo =
          "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
      }
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (value) => {
    console.log(value);
    const dataPost = {
      nameCar: value.nameCar,
      description: value.description,
      filename: value.img.name,
      model: value.model,
      km: value.km,
      price: value.price,
      ubication: value.ubication,
      email: value.email,
      message: value.message,
      urlimagepost: filebase64,
    };
    console.log(dataPost);
    console.log("Antes de enviar Post");
    sendData(dataPost);
    console.log("Formulario enviado", dataPost);
    setFormSend(true);
    setTimeout(() => setFormSend(false), 5000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <div>
              <label htmlFor="nameCar">Marca y Modelo:</label>
              <Field
                type="text"
                id="nameCar"
                name="nameCar"
                placeholder="Chevrolet S10"
              />
              <ErrorMessage
                name="nameCar"
                component={() => (
                  <div className={styles.error}>{errors.marca}</div>
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
                name="descripcion"
                component={() => (
                  <div className={styles.error}>{errors.descripcion}</div>
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
                name="precio"
                component={() => (
                  <div className={styles.error}>{errors.precio}</div>
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
                name="ubicacion"
                component={() => (
                  <div className={styles.error}>{errors.ubicacion}</div>
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
                name="correo"
                component={() => (
                  <div className={styles.error}>{errors.correo}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="img">Imagen: </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={async (event) => {
                  setFieldValue("img", event.currentTarget.files[0]);
                  filebase64 = await toBase64(event.currentTarget.files[0]);
                }}
              />
            </div>
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
      </Formik>
    </>
  );
}
