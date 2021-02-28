import styles from '../styles/components/Introduction.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Introduction(){
    return(
        <div className={styles.container}>
            <div className={styles.containerHorizontal}>
                <div className={styles.leftContentContainer}>
                    <h2 className={styles.titleText}>Sua fome acaba aqui!</h2>
                    <h5 className={styles.subText}>Baixe o app ou acesse sua conta</h5>
                    <div className={styles.storeButtonsContainer}>
                        <Link href='/sobre'>
                            <a className={styles.buttonGooglePlay}>
                                <Image
                                    src="/disponivel_no_google_play.png"
                                    alt="Yoomy"
                                    width={254}
                                    height={76}
                                />
                            </a>
                        </Link>
                        <Link href='/sobre'>
                            <a  className={styles.buttonAppStore}>
                                <Image
                                    src="/baixar_na_app_store.png"
                                    alt="Yoomy"
                                    width={254}
                                    height={76}
                                />
                            </a>
                        </Link>
                    </div>
                    
                </div> 
                {/* <div className={styles.pratoDeComidaContainer}>
                    <Image
                        src="/prato_com_comida.png"
                        alt="Yoomy"
                        width={742}
                        height={745}
                    />
                </div>
                <div className={styles.padronagem1}>
                    <Image
                        src="/padronagem.png"
                        alt="Yoomy"
                        width={1040}
                        height={442}
                    />
                </div> */}
            </div>
            {/* <div className={styles.pratoDeComidaquadradoContainer}>
                <Image
                    src="/Grupo_9775.png"
                    alt="Yoomy"
                    width={1355}
                    height={727}
                />
            </div> */}
            {/* <div className={styles.quadradoBranco}></div> */}
            {/* <div className={styles.fundo}></div> */}
             
        </div>
    )
}

export default Introduction