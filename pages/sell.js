import React, { useEffect } from "react";
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Formulario from "../components/pruebaFormulario";
import HowOperate from "../components/HowOperate/HowOperate";
import GeneralFooter from "../components/GeneralFooter/GeneralFooter";
import { getSession, useSession } from "next-auth/react";

export default function Sell({ address }) {
  const { status } = useSession();

  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="Versión beta de criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AppBarCC />
      <div className={styles.grid}>
        <div className={styles.sell_form}>
          <a className={styles.card_form}>
            <h2>Formulario de Venta</h2>
            <br />
            <p>
              Para publicar tu vehículo en criptocars deberás completar y enviar
              el siguiente formulario.
            </p>
            <br />
            <p>
              Tené en cuenta dejar tu mail de contacto de manera correcta asi
              nos podemos contactar con vos.
            </p>
            <br />
            <p>
              Completa el siguiente formulario para poder publicar tu vehículo,
              si todo está en orden nos comunicaremos con vós y procederemos a
              publicar tu vehículo.
            </p>
            <br />
            <br />
            <p>
              Si ya contás con una publicación en MercadoLibre de tu auto podés
              insertar el link en el siguiente formulario y asi se precargará
              toda la información. Caso contrario seleccioná la carga manual.
            </p>
            {status === "authenticated" ? (
              <div>
                <br />
                <Formulario address={address} />
              </div>
            ) : (
              <div>
                <br />
                <h3>Inicia sesion para poder enviar el Formulario.</h3>
              </div>
            )}
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <aside>
          <HowOperate />
          <GeneralFooter />
        </aside>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const address = session?.address ?? null;

  return {
    props: {
      address,
      session,
    },
  };
};
