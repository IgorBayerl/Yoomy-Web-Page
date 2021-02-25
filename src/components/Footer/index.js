import styles from './styles.module.css';
import Image from 'next/image';

function Footer(){
    return(
        <div className={styles.backgroundFooter}>
            <div>
                <div>
                    <ul>
                        <h3>Yoomy</h3>
                        <img className={styles.logo} src='../../images/imagotipo.svg'/>
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

export default Footer