import Head from 'next/head'
import AppBarCC from '../components/ResponsiveAppBar/AppBarCC'
import GeneralFooter from '../components/GeneralFooter/GeneralFooter'

export default function DashboardDelete() {
  return (
    <div>
      <Head>
        <title>CriptoCars</title>
        <meta name="description" content="criptocars" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AppBarCC/>       
      <GeneralFooter/>
    </div>
  )
}