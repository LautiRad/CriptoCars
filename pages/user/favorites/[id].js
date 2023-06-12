import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import HowOperate from "../../../components/HowOperate/HowOperate";
import GeneralFooter from "../../../components/GeneralFooter/GeneralFooter";
import AppBarCC from "../../../components/ResponsiveAppBar/AppBarCC";
import { useSession } from "next-auth/react";

export default function ProductFavorites({ vehicle }) {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const { status } = useSession();

  useEffect(() => {
    fetch(`/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data.vehicle))
      .catch((error) => console.error(error));
  }, [id]);

  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#ED1848",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>CriptoCars</title>
          <meta name="description" content="criptocars" />
          <link rel="icon" href="/icon.png" />
        </Head>
        <AppBarCC />
        <div>
          {status === "authenticated" ? (
            <div>
              <h3>Tus vehículos favoritos</h3>
              {/* Aquí podemos mostrar los vehículos favoritos del usuario */}
            </div>
          ) : (
            <div>
              <h3>Inicia sesión para ver tus vehículos favoritos.</h3>
            </div>
          )}
        </div>
        <aside>
          <HowOperate />
          <GeneralFooter />
        </aside>
      </div>
    </ThemeProvider>
  );
}
