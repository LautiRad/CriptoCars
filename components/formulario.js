import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import PreviewImage from "./PreviewImage";
import styles from "../styles/Home.module.css";

export default function Formulario() {
  const [formSend, setFormSend] = useState(false);
  const [PrevImg, setPrevImg] = useState(null);

  const sendData = async ({ data }) => {
    try {
      const post = await axios({
        method: "post",
        url: "https://criptocar-api.azurewebsites.net/api/v1/post",
        data: data,
        headers: {
          Authorization: process.env.NEXT_PUBLIC_BEARER_TOKEN,
          "Content-Type": "application/json",
        },
      });
      console.log(post, "se envio");
    } catch (e) {
      console.log(e);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const initialValues = {
    nameCar: "",
    description: "",
    model: "",
    km: "",
    price: "",
    ubication: "",
    email: "",
    urlimagepost: "",
    message: "",
  };

  const validate = Yup.object().shape({
    name: Yup.string()
      .min(2, "Nombre del modelo muy corto!")
      .max(50, "Nombre del modelo muy largo!")
      .required("Campo requerido!"),
    description: Yup.string()
      .min(10, "Descripción muy corta!")
      .max(60, "Descripción muy larga")
      .required("Campo requerido"),
    model: Yup.number("Tiene que ser un numero")
      .required("Campo requerido")
      .positive()
      .integer(),
    km: Yup.number("Tiene que ser un numero")
      .required("Campo requerido")
      .positive()
      .integer(),
    price: Yup.number("Tiene que ser un numero")
      .required("Campo requerido")
      .positive()
      .integer(),
    ubication: Yup.string()
      .min(10, "Descripción muy corta!")
      .max(60, "Descripción muy larga")
      .required("Campo requerido"),
    email: Yup.string()
      .min(10, "Descripción muy corta!")
      .max(60, "Descripción muy larga")
      .required("Campo requerido"),
    urlimagepost: Yup.string().required("Campo requerido"),
    message: Yup.string()
      .min(10, "Descripción muy corta!")
      .max(60, "Descripción muy larga")
      .required("Campo requerido"),
  });

  const handleSubmit = async (value) => {
    const data = {
      name: value.name,
      description: value.description,
      model: value.model,
      km: value.km,
      price: value.price,
      ubication: value.ubication,
      email: value.email,
      urlimagepost: value.urlimagepost,
      message: value.message,
    };
    console.log("Formulario enviado", data);
    sendData(data);
    setFormSend(true);
    setTimeout(() => setFormSend(false), 5000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className={styles.formulario}>
            <div>
              <label htmlFor="nameCar">Marca y Modelo:</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Chevrolet S10"
              />
              {errors.name && touched.name ? (
                <div className={styles.error}>{errors.name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="description">Breve Descripción: </label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="2.8 LS 4x4 CD 16V Turbo Diesel 4P Manual."
              />
              {errors.description && touched.description ? (
                <div className={styles.error}>{errors.description}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="">Año: </label>
              <Field type="number" id="model" name="model" placeholder="2021" />
              {errors.model && touched.model ? (
                <div className={styles.error}>{errors.model}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="km">Kilometraje: </label>
              <Field type="number" id="km" name="km" placeholder="35000" />
              {errors.km && touched.km ? (
                <div className={styles.error}>{errors.km}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="price">Precio: (Expresado en USDT) </label>
              <Field type="text" id="price" name="price" placeholder="21500" />
              {errors.price && touched.price ? (
                <div className={styles.error}>{errors.price}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="ubication">Ubicación: </label>
              <Field
                type="text"
                id="ubication"
                name="ubication"
                placeholder="El Chaltén, Santa Cruz, Argentina."
              />
              {errors.ubication && touched.ubication ? (
                <div className={styles.error}>{errors.ubication}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="email">Mail de contacto: </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="micorreo@criptocars.com"
              />
              {errors.email && touched.email ? (
                <div className={styles.error}>{errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="urlimagepost">Imagen: </label>
              <input
                type="file"
                id="urlimagepost"
                name="urlimagepost"
                accept="image/*"
                onChange={async (event) => {
                  setPrevImg(event.currentTarget.files[0]);
                  const img = await toBase64(event.currentTarget.files[0]);
                  console.log(img);
                  setFieldValue("urlimagepost", img);
                }}
              />
              {errors.urlimagepost && touched.urlimagepost ? (
                <div className={styles.error}>{errors.urlimagepost}</div>
              ) : null}
              {PrevImg != null && <PreviewImage file={PrevImg} />}
            </div>
            <div>
              <Field
                name="message"
                as="textarea"
                placeholder="Mensaje o comentario que quieras agregar.."
              />
              {errors.message && touched.message ? (
                <div className={styles.error}>{errors.message}</div>
              ) : null}
            </div>

            <button type="submit">Enviar</button>
            {formSend && (
              <p className={styles.exito}>Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
