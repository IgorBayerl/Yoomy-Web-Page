import Head from 'next/head'

// Components
import BaseLayout from '../components/BaseLayout';
import FormHome from '../components/Home/FormHome';
import Highlights from '../components/Home/Highlights';
import Informations from '../components/Home/Informations';
import Advantages from '../components/Home/Advantages';
import Customers from '../components/Home/Customers';
import Reviews from '../components/Home/Reviews';
import Questions from '../components/Questions';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoomy - Home</title>
        <meta name="description" content="INSERIR UMA DESCRIÇÃO AQUI" />
        <meta name="keywords" content="INSERIR AS KEYWORDS AQUI" />
      </Head>
      <BaseLayout>
        <FormHome />
        <Highlights />
        <Informations />
        <Advantages />
        <Customers />
        <Reviews />
        <Questions />
      </BaseLayout>
    </div>
  )
}
