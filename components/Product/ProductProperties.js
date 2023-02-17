import React from "react";
import {Grid} from "@mui/material";
import styles from '../../styles/CarDetails.module.css'

function ProductProperties({properties}) {
  return (
    <Grid item sm={12} md={7} className={styles.detailsC}>
      <div className={styles.tabs}>
        <h1 className={styles.title}>Características Principales</h1>
      </div>
      <div className={styles.containerPropertiesC}>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Marca
          </p>
          <p className={styles.propertiesTextC}>
            Fiat
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Modelo
          </p>
          <p className={styles.propertiesTextC}>
            Toro
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Version
          </p>
          <p className={styles.propertiesTextC}>
            Volcano
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Año
          </p>
          <p className={styles.propertiesTextC}>
            2016
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Color
          </p>
          <p className={styles.propertiesTextC}>
            Bordó
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Tipo de combustible
          </p>
          <p className={styles.propertiesTextC}>
            Diesel
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Puertas
          </p>
          <p className={styles.propertiesTextC}>
            4
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Transmisión
          </p>
          <p className={styles.propertiesTextC}>
            Automático
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Tipo de carrocería
          </p>
          <p className={styles.propertiesTextC}>
            Pick up
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Kilometraje
          </p>
          <p className={styles.propertiesTextC}>
            92.000
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Motor
          </p>
          <p className={styles.propertiesTextC}>
            2.0
          </p>
        </div>
      </div>
    </Grid>
  );
}

export default ProductProperties;
