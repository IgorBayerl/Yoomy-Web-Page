import styles from '../styles/components/HowItWorks.module.css';
import Image from 'next/image';
import Link from 'next/link';

function HowItWorks(){
    

    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Como funciona</h1>
            </div>
            <div className={styles.iconsContainer}>
                <div className={styles.item}>
                    <div className={styles.iconContainer}>
                        <Image
                            src="/yoomy_download.png"
                            alt="Download Yoomy APP"
                            width={93}
                            height={91}
                        />
                    </div>
                    <h3>Baixe o app</h3>
                    <p>O aplicativo esta disponivel para IOS e Android</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.iconContainer}>
                        <Image
                            src="/yoomy_table.png"
                            alt="Download Yoomy APP"
                            width={80}
                            height={102}
                        />
                    </div>
                    <h3>Escolha sua mesa</h3>
                    <p>Utilize o qr code pra solicitar uma mesa, você também pode fazer reservas.</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.iconContainer}>
                        <Image
                            src="/yoomy_credit-card.png"
                            alt="Download Yoomy APP"
                            width={83}
                            height={67}
                        />
                    </div>
                    <h3>Sem filas, sem espera</h3>
                    <p>As filas acabaram! Peça ou pague de forma fácil através do app</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks