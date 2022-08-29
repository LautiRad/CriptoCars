import React from 'react';
import styles from '../../styles/Home.module.css'

function HowOperate() {
    return (
      <div className={styles.HowOperate}>
        <div>
          <h3 className={styles.title}>Preguntas Frecuentes</h3>
        </div>
        <div className={styles.HowOperate}>
          <h4 className={styles.description}>¿Cómo comprar en criptocars?</h4>
          <p className={styles.description}>
              Encontrá tu vehículo en nuestro catálogo, ayudándote con las
              herramientas, categorías o con el buscador. En este último vas a
              poder buscar por marca, modelo u otra especificación que creas
              pertinente.
          </p>
        </div>
        <div className={styles.HowOperate}>
        <h4 className={styles.description}>Pagá con criptomonedas</h4>
          <p className={styles.description}>
              Una vez que hayas encontrado el vehículo que estabas
              buscando, vas a poder pagar con criptomonedas, estas
              van a quedar en custodia por un Contrato Inteligente (smart
              contract P2P), en el cuál se asegurarán tus activos, hasta que el
              Producto o Servicio se encuentre totalmente bajo tu dominio.
          </p>
        </div>
        <div className={styles.HowOperate}>
          <h4 className={styles.description}>Disfrutá de tu compra</h4>
          <p className={styles.description}>
              Cuando ambas partes validan que la transferencia se concretó, las
              criptomonedas se liberan al vendedor.
              ¡Ya podés disfrutar tu nuevo
              Vehículo!
          </p>
        </div>
      </div>
    );
}

export default HowOperate;