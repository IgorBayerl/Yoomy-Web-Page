import Head from 'next/head'

// Components
import BaseLayout from '../components/BaseLayout';
import EmConstrucao from '../components/EmContrucao';
import Informations from '../components/MainPage/Informations';
import Advantages from '../components/MainPage/Advantages';
import Customers from '../components/MainPage/Customers';
import ShareIt from '../components/MainPage/ShareIt';
import AllInYourHand from '../components/MainPage/AllInYourHand';
import Discounts from '../components/MainPage/Discounts';
import Top from '../components/MainPage/Top';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoomy - Aplicativo</title>
        <meta name="description" content="Confira as soluções Yoomy para levar o seu restaurante ao proximo nivel!" />
        <meta name="keywords" content="aplicativo yoomy restaurants alimentos restaurantes comida aplicativo delivery cardapio menu" />
      </Head>
      <BaseLayout>
        <EmConstrucao/>
      </BaseLayout>
    </div>
  )
}