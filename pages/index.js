import Head from "next/head";
import AppBarCC from "../components/ResponsiveAppBar/AppBarCC";
import Toolbar from "../components/Toolbar/Toolbar";
import Categories from "../components/Categories/Categories";
import DestArticles from "../components/DestArticles/DestArticles";
import HowOperate from "../components/HowOperate/HowOperate";
import GeneralFooter from "../components/GeneralFooter/GeneralFooter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AppBarCC />
      <Toolbar />
      <Categories />
      <DestArticles />
      <HowOperate />
      <GeneralFooter />
    </div>
  );
}
