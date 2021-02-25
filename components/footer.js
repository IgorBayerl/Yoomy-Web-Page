import styles from '../styles/components/footer.module.css';
import Image from 'next/image';

function Footer(){
    return(
        <div className={styles.backgroundFooter}>
            <div className={styles.lista}>
            <div className={styles.coluna}>
                    <ul>
                        <Image
                            src="/imagotipo.png"
                            alt="Picture"
                            width={200}
                            height={90}
                        />
                        <li>Disponivel no google play</li>
                        <li>Disponivel na app store</li>
                    </ul>
                </div>
                <div className={styles.coluna}>
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
                <div className={styles.coluna}>
                    <ul>
                        <h3>Politicas e termos</h3>
                        <li>Termos e condilcoes</li>
                        <li>Politica de processamento de dados</li>
                    </ul>
                </div>
                <div className={styles.coluna}>
                    <ul>
                        <h3>Redes sociais</h3>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer}>
                <p>2021 Todos os direito s reservados a Yoomy </p>
            </div>
            
        </div>
    )
}

export default Footer