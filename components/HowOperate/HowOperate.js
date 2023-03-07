import React from "react";
import styles from "../../styles/Home.module.css";

function HowOperate() {
  return (
    <div className={styles.containerHowOperate} id="faQ">
      <div>
        <h1 className={styles.title}>¿Cómo comprar en CriptoCars?</h1>
      </div>
      <div className={styles.HowOperateGrid}>
        <div className={styles.HowOperate}>
          <h4 className={styles.redHowOperate}>01</h4>
          <h4 className={styles.description}>Seleccioná tu auto</h4>
          <p>
            Encontrá tu vehículo en nuestro catálogo, ayudándote con las
            herramientas, categorías o con el buscador. En este último vas a
            poder buscar por marca, modelo u otra especificación.
          </p>
        </div>
        <div className={styles.HowOperate}>
          <h4 className={styles.redHowOperate}>02</h4>
          <h4 className={styles.description}>Pagá con criptomonedas</h4>
          <p>
            Una vez que hayas encontrado el vehículo que estabas buscando, vas a
            poder pagar con criptomonedas, estas van a quedar en custodia por un
            Contrato Inteligente (smart contract P2P), en el cuál se asegurarán
            tus activos, hasta que el vehículo se encuentre totalmente bajo tu
            dominio.
          </p>
        </div>
        <div className={styles.HowOperate}>
          <h4 className={styles.redHowOperate}>03</h4>
          <h4 className={styles.description}>Disfrutá de tu compra</h4>
          <p>
            Cuando ambas partes validan que la transferencia se concretó, las
            criptomonedas se liberan al vendedor. ¡Ya podés disfrutar tu nuevo
            Vehículo!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowOperate;
