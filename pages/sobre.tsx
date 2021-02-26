import Link from 'next/link';
import Head from 'next/head'

function Sobre(){
    return (
        <div>
            <Head >
                <title>Yoomy - Sobre</title>
            </Head>
            <h1>Yoomy - Sobre</h1>
            <Link href='/'>
                <a>home</a>
            </Link>
        </div>
    )

}


export default Sobre