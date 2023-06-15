import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/CarDetails.module.css";

function ProductInfo({ properties }) {
  const map = new Map(Object.entries(JSON.parse(properties.attributes)));

  return (
    <Grid item sm={12} md={7}>
      <div className={styles.containerPropertiesC}>
        {map.get("HAS_ONBOARD_COMPUTER") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Computadora de abordo</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_ONBOARD_COMPUTER").value}
            </p>
          </div>
        )}
        {map.get("HAS_ALLOY_WHEELS") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Llantas de aleación</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_ALLOY_WHEELS").value}
            </p>
          </div>
        )}
        {map.get("HAS_PASSENGER_AIRBAG") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>
              Airbag para conductor y pasajero
            </p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_PASSENGER_AIRBAG").value}
            </p>
          </div>
        )}
        {map.get("HAS_RAIN_SENSOR") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Sensor de lluvia</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_RAIN_SENSOR").value}
            </p>
          </div>
        )}
        {map.get("HAS_AUTOPILOT") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Piloto automático</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_AUTOPILOT").value}
            </p>
          </div>
        )}
        {map.get("HAS_STABILITY_CONTROL") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Control de estabilidad</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_STABILITY_CONTROL").value}
            </p>
          </div>
        )}
        {map.get("HAS_AIR_CONDITIONING") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Aire acondicionado</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_AIR_CONDITIONING").value}
            </p>
          </div>
        )}
        {map.get("HAS_CENTRAL_POWER_DOOR_LOCKS") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>
              Cierre centralizado de puertas
            </p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_CENTRAL_POWER_DOOR_LOCKS").value}
            </p>
          </div>
        )}
        {map.get("HAS_PARKING_SENSOR") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Sensor de estacionamiento</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_PARKING_SENSOR").value}
            </p>
          </div>
        )}
        {map.get("HAS_CLIMATE_CONTROL") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Climatizador</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_CLIMATE_CONTROL").value}
            </p>
          </div>
        )}
        {map.get("WITH_BACKUP_CAMERA") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Con cámara de retroceso</p>
            <p className={styles.propertiesTextC}>
              {map.get("WITH_BACKUP_CAMERA").value}
            </p>
          </div>
        )}
        {map.get("HAS_REAR_FOGLIGHTS") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>
              Faros antinieblas traseros
            </p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_REAR_FOGLIGHTS").value}
            </p>
          </div>
        )}
        {map.get("ENGINE_DISPLACEMENT") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Cilindrada</p>
            <p className={styles.propertiesTextC}>
              {map.get("HAS_REAR_FOGLIGHTS")
                ? map.get("HAS_REAR_FOGLIGHTS").value
                : ""}
            </p>
          </div>
        )}
        {map.get("FUEL_CAPACITY") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Capacidad del tanque</p>
            <p className={styles.propertiesTextC}>
              {map.get("FUEL_CAPACITY") ? map.get("FUEL_CAPACITY").value : ""}
            </p>
          </div>
        )}
        {map.get("HEIGHT") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Altura</p>
            <p className={styles.propertiesTextC}>{map.get("HEIGHT").value}</p>
          </div>
        )}
        {map.get("LENGTH") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Largo</p>
            <p className={styles.propertiesTextC}>{map.get("LENGTH").value}</p>
          </div>
        )}
        {map.get("WIDTH") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Ancho</p>
            <p className={styles.propertiesTextC}>{map.get("WIDTH").value}</p>
          </div>
        )}
        {map.get("PASSENGER_CAPACITY") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Capacidad de personas</p>
            <p className={styles.propertiesTextC}>
              {map.get("PASSENGER_CAPACITY").value}
            </p>
          </div>
        )}
        {map.get("POWER") && (
          <div className={styles.propertiesC}>
            <p className={styles.propertiesTitleC}>Potencia</p>
            <p className={styles.propertiesTextC}>{map.get("POWER").value}</p>
          </div>
        )}
      </div>
    </Grid>
  );
}

export default ProductInfo;
