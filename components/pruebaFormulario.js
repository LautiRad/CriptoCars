import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { uploadFile } from "./firebase"

export default function Formulario() {
  const [formSend, setFormSend] = useState(false);
  const [file, setFile] = useState(null);

  const initialValues = {
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

  const validate = (value) => {
    let errors = {};
      if (!value.name) {
        errors.name = "Por favor ingresa un nombre";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.name)) {
        errors.name = "El nombre solo puede contener letras y espacios";
      }
      if (!value.model) {
        errors.model = "Por favor ingresa una marca";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.model)) {
        errors.model = "El nombre solo puede contener letras y espacios";
      }
      if (!value.descripcion) {
        errors.descripcion = "Por favor ingresa una descripcion";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.descripcion)) {
        errors.descripcion =
          "La descripcion solo puede contener letras y espacios";
      }
      if (!value.model) {
        errors.model = "Por favor ingresa un modelo";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.model)) {
        errors.model = "El Año del modelo solo puede contener numeros";
      }
      if (!value.km) {
        errors.km = "Por favor ingresa un km";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.km)) {
        errors.km = "El Año del modelo solo puede contener numeros";
      }
      if (!value.precio) {
        errors.precio = "Por favor ingresa un precio";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.precio)) {
        errors.precio = "El nombre solo puede contener letras y espacios";
      }
      if (!value.ubicacion) {
        errors.ubicacion = "Por favor ingresa una ubicación";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.ubicacion)) {
        errors.ubicacion = "El nombre solo puede contener letras y espacios";
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
      const result = await uploadFile(file);
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
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit}) => (
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
              <label htmlFor="image">Imagen: </label>
              <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(value) => setFile(value.currentTarget.files[0])}
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
