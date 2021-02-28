import styles from '../styles/components/HowItWorks.module.css';
import Image from 'next/image';
import Link from 'next/link';

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

export default HowItWorks