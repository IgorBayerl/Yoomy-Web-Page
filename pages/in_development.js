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
        <title>Yoomy - Home</title>
        <meta name="description" content="INSERIR UMA DESCRIÇÃO AQUI" />
        <meta name="keywords" content="INSERIR AS KEYWORDS AQUI" />
      </Head>
      <BaseLayout>
        <EmConstrucao/>
      </BaseLayout>
    </div>
  )
}
