import React from "react";
import {Grid} from "@mui/material";
import styles from '../../styles/CarDetails.module.css'

function ProductInfo({properties}) {
  return (
    <Grid item sm={12} md={7}>
      <div className={styles.containerPropertiesC}>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Potencia
          </p>
          <p className={styles.propertiesTextC}>
            170 HP
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Caja de cambios
          </p>
          <p className={styles.propertiesTextC}>
            9 Marchas
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Aire Acondicionado
          </p>
          <p className={styles.propertiesTextC}>
            Volcano
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Frenos ABS
          </p>
          <p className={styles.propertiesTextC}>
            2016
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Computadora de abordo
          </p>
          <p className={styles.propertiesTextC}>
            Bordó
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Retrobisores eléctricos
          </p>
          <p className={styles.propertiesTextC}>
            Diesel
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Llantas de aleación
          </p>
          <p className={styles.propertiesTextC}>
            4
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Cantidad de dueños
          </p>
          <p className={styles.propertiesTextC}>
            1
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Información sobre service
          </p>
          <p className={styles.propertiesTextC}>
            ¿?
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Detalles estéticos
          </p>
          <p className={styles.propertiesTextC}>
            Unicamente un rayón en la puerta del conductor
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Detalles mecánicos
          </p>
          <p className={styles.propertiesTextC}>
            Ninguno
          </p>
        </div>
        <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Estado de la documentación
          </p>
          <p className={styles.propertiesTextC}>
            Sin ningún problema
          </p>
        </div>
      </div>
    </Grid>
  );
}

export default ProductInfo;
