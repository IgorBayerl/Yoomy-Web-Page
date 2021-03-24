import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="name" content="Yoomy"/>
        <meta name="google-site-verification" content="rL0WQyAInIZEBhPV5C40ssChKzgnRDx3heD93UtoJfs" />
        <meta name="description" content="Cardápio Digital para Restaurantes. Faça como os restaurantes mais modernos com as soluções Yoomy."/>
      </Head>
      <Navbar/>
      <h1>About</h1>
      {/* <Footer/> */}
    </>
  )
}
