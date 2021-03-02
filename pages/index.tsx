import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Restaurants from '../components/Restaurants'
import ParallaxLayer1 from '../components/ParallaxLayer1'
import ParallaxLayerFundo1 from '../components/ParallaxLayerFundo1'
import HowItWorks from '../components/HowItWorks'
import InYourHand from '../components/InYourHand'

function Home(){

    const [offsetY , setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    const [cssOption , setCssOption] = useState(0)

    function detectaTamanhoDoDispositivo(){
        if (screen.width < 640 || screen.height < 480) {
            console.log('smartphone')
            setCssOption(0)
        } else if (screen.width < 1024 || screen.height < 768) {
            console.log('tablet')
            setCssOption(1)
        } else {
            console.log('pc')
            setCssOption(2)
        }
    }

    useEffect(()=>{
        detectaTamanhoDoDispositivo()
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[] )

    return (
        <div >
            <Head  >
                <title>Yoomy</title>
            </Head>
            <body className={styles.body}>
                <div className={styles.colorBackgroundOrange}></div>
                <div 
                    style={{transform:`translateY(${offsetY * -0.22}px)`}}
                    className={styles.parallaxEffect1}
                >
                    <ParallaxLayer1/>
                </div>
                <div 
                    style={{transform:`translateY(${offsetY * 0}px)`,zIndex: -1}}
                    className={styles.parallaxEffectFundo1}
                >
                    <ParallaxLayerFundo1/>
                </div>
                <div className={styles.containerMaster}>
                    <div className={styles.container}>
                        <Header/>
                        <Introduction/>
                        <Restaurants/>
                        <HowItWorks/>
                        <InYourHand/>
                        <Share/>
                        <Descounts/>
                        <BePartner/>
                        <MainPartners/>
                        <WhereWeAre/>
                        
                    </div>
                </div>
                <Footer/>
            </body>
        </div>
    )
}


// function InYourHand(){
//     return(
//         <div>
//             <div>
//                 <h2>Tudo na palma da sua mao</h2>
//                 <p>Texto</p>
//             </div>
//             <div>Imagem</div>
//         </div>
//     )
// }

function Share(){
    return(
        <div>
            <div>
                <h2>Compartilhe a conta</h2>
                <p>textao</p>
            </div>
            <div>
                <div>
                    <img alt='Persona1'/>
                </div>
                <div>
                    <img alt='Persona2'/>
                    <img alt='Persona3'/>
                </div>
            </div>
        </div>
    )
}

function Descounts() {
    return(
        <div>
            <div>
                <h2>Descontos e promocoes</h2>
                <p>Texto</p>
            </div>
            <div>Imagem</div>
        </div>
    )
}

function BePartner(){
    return(
        <div>
            <div>
                <h2>Seja um restaurante parceiro</h2>
                <p>aaaa</p>
                <button>Saiba Mais</button>
            </div> 
            <div>Imagem</div> 
        </div>
    )
}

function MainPartners(){
    return(
        <div>
            <div>
                <h3>Os principais restaurantes parceiros</h3>
                <p>Temos os principais restaurantes que voc"e procura para matar sua fome. e s[o baixar o app e pedir.</p>
            </div>
            <div>
                <ul>
                    <li>Mac</li>
                    <li>Subway</li>
                    <li>Girafas</li>
                    <li>BurgerKing</li>
                </ul>
                <ul>
                    <li>Mac</li>
                    <li>Subway</li>
                    <li>Girafas</li>
                    <li>BurgerKing</li>
                </ul>
            </div>
        </div>
    )
}

function WhereWeAre(){
    return(
        <div>
            <div>
                <h2>Onde estamos</h2>
                <div>
                    <select name="example1" id="ex1">
                        <option value="aaa">aaa</option>
                        <option value="vvv">vvv</option>
                    </select>
                    <select name="example2" id="ex2">
                        <option value="aaa">aaa</option>
                        <option value="vvv">vvv</option>
                    </select>
                    <select name="example2" id="ex2">
                        <option value="aaa">aaa</option>
                        <option value="vvv">vvv</option>
                    </select>
                </div>
            </div>
            <div>
                <img alt='Mapa'/>
            </div>
        </div>
    )
}




export default Home