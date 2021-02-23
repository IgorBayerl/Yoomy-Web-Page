import {useState} from 'react';
import Link from 'next/link';

function Home(){
    return (
        <div>
            <Header/>
            <FirstPart/>
            <TopRestaurants/>
            <HowItWorks/>
            <InYourHand/>
            <Share/>
            <Descounts/>
            <BePartner/>
            <MainPartners/>
            <WhereWeAre/>
            <Footer/>
        </div>
    )
}

function FirstPart(){
    return(
        <div>
            <div>
                <div>
                    <h2>Aqui tem tudo para sua fome!</h2>
                    <h5>Baixe o app ou acesse sua conta</h5>
                    <div>
                        <button>Google Play</button>
                        <button>App store</button>
                    </div>
                    
                </div> 
                <div>Imagem</div>
            </div>
            <div>
                <div>Imagem</div>
            </div>
             
        </div>
    )
}

function TopRestaurants(){
    return(
        <div>
            <div>
                <h2>
                    Top Restaurants
                </h2>
            </div>
            <ul>
                <li>
                    <img alt='Mc Donalds'/>
                    <h2>Mc Donalds</h2>
                </li>
                <li>
                    <img alt='Mc Donalds'/>
                    <h2>Mc Donalds</h2>
                </li>
                <li>
                    <img alt='Mc Donalds'/>
                    <h2>Mc Donalds</h2>
                </li>
                <li>
                    <img alt='Mc Donalds'/>
                    <h2>Mc Donalds</h2>
                </li>
                <li>
                    <img alt='Mc Donalds'/>
                    <h2>Mc Donalds</h2>
                </li>
            </ul>
        </div>
    )
}

function Header(){
    
    return(
        <div>
            <div>
                <img href='' alt='YOOMY'></img>
                <input placeholder='Pesquisar'></input>
            </div>
            <div>
                <Link href='/sobre'>
                    <a>Restaurante</a>
                </Link>
                <Link href='/sobre'>
                    <a>Reserva</a>
                </Link>
                <Link href='/sobre'>
                    <a>Parceria</a>
                </Link>
            </div>
            <div>
                <Link href='/sobre'>
                    <a>Entrar</a>
                </Link>
            </div>
        </div>
    )
}

function HowItWorks(){
    return(
        <div>
            <div>
                <h1>Como funciona</h1>
            </div>
            <div>
                <div>
                    <img alt='baixe o app'/>
                    <h3>Baixe o app</h3>
                    <p>O aplicativo esta disponivel para ios e android</p>
                </div>
                <div>
                    <img alt='Escolha sua mesa'/>
                    <h3>Escolha sua mesa</h3>
                    <p>Utilize o qr code para solicitar uma mesa</p>
                </div>
                <div>
                    <img alt='Sem filas, sem espera'/>
                    <h3>Sem filas, sem espera</h3>
                    <p>Peca e paque sem espera e sem filas</p>
                </div>
            </div>
        </div>
    )
}

function InYourHand(){
    return(
        <div>
            <div>
                <h2>Tudo na palma da sua mao</h2>
                <p>Texto</p>
            </div>
            <div>Imagem</div>
        </div>
    )
}

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
                <p1></p1>
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
                    <input/>
                    <input/>
                    <input/>
                </div>
            </div>
            <div>
                <img alt='Mapa'/>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <div>
                <div>
                    <ul>
                        <h3>Logo</h3>
                        <li>disponivel no google play</li>
                        <li>disponivel na app store</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Informacoes</h3>
                        <li>inicio</li>
                        <li>quero ser parceiro</li>
                        <li>quero ser entregador</li>
                        <li>suporte</li>
                        <li>como pedir</li>
                        <li>como pedir</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Politicas e termos</h3>
                        <li>Termos e condilcoes</li>
                        <li>Politica de processamento de dados</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Redes sociais</h3>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>2021 Todos os direito s reservados a Yoomy </p>
            </div>
            
        </div>
    )
}


export default Home