import Document, { Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render () {
        return(
            <Html>
                <Head>
                    <meta>Cardápio Digital para Restaurantes. Faça como os restaurantes mais modernos com as suluções Yoomy.</meta>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}