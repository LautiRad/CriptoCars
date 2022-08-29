import React, {useState} from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import styles from '../styles/Home.module.css'

export default function Formulario() {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    const postForm = async (values) => {
        const options = {
          method: 'POST',
          headers: {
            'Authorization': '', 
      		'Content-Type': 'application/json'},
          body: JSON.stringify({values}),
        };
      
        return fetch('https://criptocars-api.herokuapp.com/api/v1/post', options)
          .then(response => response.json())
          .then(res => {
            if (res?.status === 200) {
              return res;
            }
            throw new Error('Network response was not ok');
          })
      
          .catch(err => console.log('ERROR', err));
      };

	return (
		<>
			<Formik /*
				initialValues={{
                    id: '',
					nameCar: '',
					description: '',
                    model: '',
                    km: '',
                    price: '',
                    ubication: '',
                    img: '',
                    email: '',
                    message: ''
				}}
				validate={(valores) => {
					let errores = {};
                    {/*
					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}
                    // Validacion marca
                    if(!valores.marca){
						errores.marca = 'Por favor ingresa una marca'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.marca)){
						errores.marca = 'El nombre solo puede contener letras y espacios'
					}
                    // Validacion descripcion
                    if(!valores.descripcion){
						errores.descripcion = 'Por favor ingresa una descripcion'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.descripcion)){
						errores.descripcion = 'La descripcion solo puede contener letras y espacios'
					}
                    // Validacion model
                    if(!valores.model){
						errores.model = 'Por favor ingresa un modelo'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.model)){
						errores.model = 'El Año del modelo solo puede contener numeros'
					}
                    // Validacion km
                    if(!valores.km){
						errores.km = 'Por favor ingresa un km'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.km)){
						errores.km = 'El nombre solo puede contener letras y espacios'
					}

                    // Validacion precio
                    if(!valores.precio){
						errores.precio = 'Por favor ingresa un precio'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.precio)){
						errores.precio = 'El nombre solo puede contener letras y espacios'
					}
                    // Validacion ubicacion
                    if(!valores.ubicacion){
						errores.ubicacion = 'Por favor ingresa una ubicación'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ubicacion)){
						errores.ubicacion = 'El nombre solo puede contener letras y espacios'
					}
					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    }
				}}

				onSubmit={(valores) => {
                    const data = {
    					"name" : valores.nameCard ,
    					"description" : valores.description,
    					"fileextension" : "jpg",
    					"filename" : "ecommerce",
    					"urlimagepost" : "",
    					"user" : {
        				"id" : valores.id
    					}
					}}
					console.log('Formulario enviado');
                    postForm(data);
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			*/>
				{( {errors , handleSubmit , setFieldValue} ) => (
					<form onSubmit={handleSubmit} className={styles.formulario}>
						<div>
							<label htmlFor="nameCar">Marca y Modelo:</label>
							<Field
								type="text" 
								id="nombre" 
								name="nameCar" 
								placeholder="Chevrolet S10"
							/>
							<ErrorMessage name="marca" component={() => (<div className={styles.error}>{errors.marca}</div>)} />
						</div>
                        <div>
							<label htmlFor="description">Breve Descripción: </label>
							<Field
								type="text" 
								id="description" 
								name="description" 
								placeholder="2.8 LS 4x4 CD 16V Turbo Diesel 4P Manual."
							/>
							<ErrorMessage name="descripcion" component={() => (<div className={styles.error}>{errors.descripcion}</div>)} />
						</div>
                        <div>
							<label htmlFor="">Año: </label>
							<Field
								type="number" 
								id="model" 
								name="model" 
								placeholder="2021"
							/>
							<ErrorMessage name="model" component={() => (<div className={styles.error}>{errors.model}</div>)} />
						</div>
                        <div>
							<label htmlFor="km">Kilometraje: </label>
							<Field
								type="number" 
								id="km"
								name="km" 
								placeholder="35000"
							/>
							<ErrorMessage name="km" component={() => (<div className={styles.error}>{errors.km}</div>)} />
						</div>
                        <div>
							<label htmlFor="price">Precio: (Expresado en USDT) </label>
							<Field
								type="text" 
								id="price" 
								name="price" 
								placeholder="21500"
							/>
							<ErrorMessage name="precio" component={() => (<div className={styles.error}>{errors.precio}</div>)} />
						</div>
                        <div>
							<label htmlFor="ubication">Ubicación: </label>
							<Field
								type="text" 
								id="ubication" 
								name="ubication" 
								placeholder="El Chaltén, Santa Cruz, Argentina."
							/>
							<ErrorMessage name="ubicacion" component={() => (<div className={styles.error}>{errors.ubicacion}</div>)} />
						</div>
						<div>
							<label htmlFor="email">Mail de contacto: </label>
							<Field
								type="email" 
								id="email" 
								name="email" 
								placeholder="micorreo@criptocars.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className={styles.error}>{errors.correo}</div>)} />
						</div>
                        <div>
                            <label htmlFor="img">Imagen: </label>
                            <input type="file" id="img" name="img" accept="image/*" onChange={(event) => {setFieldValue("img", event.currentTarget.files[0]);}}/>
                        </div>
						<div>
							<Field name="message" as="textarea" placeholder="Mensaje o comentario que quieras agregar.." />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className={styles.exito}>Formulario enviado con exito!</p>}
					</form>
				)}
			</Formik>
		</>
	);
}