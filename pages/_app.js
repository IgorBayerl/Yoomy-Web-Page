import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps} = this.props;
    return (
      <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/styles/geral.css" />
        <link rel="stylesheet" type="text/css" href="/styles/rc-select.css" />
        <link rel="stylesheet" type="text/css" href="/styles/slick.mim.css" />
        <link rel="stylesheet" type="text/css" href="/styles/slick-theme.mim.css" />
        <meta name="google-site-verification" content="rL0WQyAInIZEBhPV5C40ssChKzgnRDx3heD93UtoJfs" />
      </Head>
      <Component {...pageProps} />
      </>
    );
  }
}