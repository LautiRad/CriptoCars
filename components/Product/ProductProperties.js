import React from "react";
import {Grid} from "@mui/material";
import styles from '../../styles/CarDetails.module.css'

function ProductProperties({properties}) {
  const map = new Map(Object.entries(JSON.parse(properties.attributes)));

  return (
    <Grid item sm={12} md={7} className={styles.detailsC}>
      <div className={styles.tabs}>
        <h1 className={styles.title}>Características Principales</h1>
      </div>
      <div className={styles.containerPropertiesC}>
        {map.get("BRAND") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Marca
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("BRAND").value}
          </p>
        </div>}
        {map.get("MODEL") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Modelo
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("MODEL").value}
          </p>
        </div>}
        {map.get("TRIM") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Version
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("TRIM").value}
          </p>
        </div>}
        {map.get("VEHICLE_YEAR") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Año
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("VEHICLE_YEAR").value}
          </p>
        </div>}
        {map.get("COLOR") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Color
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("COLOR").value}
          </p>
        </div>}
        {map.get("FUEL_TYPE") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Tipo de combustible
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("FUEL_TYPE").value}
          </p>
        </div>}
        {map.get("DOORS") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Puertas
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("DOORS").value}
          </p>
        </div>}
        {map.get("TRANSMISSION") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Transmisión
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("TRANSMISSION").value}
          </p>
        </div>}
        {map.get("VEHICLE_BODY_TYPE") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Tipo de carrocería
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("VEHICLE_BODY_TYPE").value}
          </p>
        </div>}
        {map.get("KILOMETERS") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Kilometraje
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("KILOMETERS").value}
          </p>
        </div>}
        {map.get("STEERING") && <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>
                Kilometraje
            </p>
            <p className={styles.propertiesTextC}>
                {map.get("STEERING").value}
            </p>
        </div>}

        {map.get("ENGINE") && <div className={styles.propertiesC}>
          <p className={styles.propertiesTitleC}>
            Motor
          </p>
          <p className={styles.propertiesTextC}>
            {map.get("ENGINE").value}
          </p>
        </div>}
      </div>
    </Grid>
  );
}

export default ProductProperties;
