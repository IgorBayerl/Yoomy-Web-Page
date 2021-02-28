import styles from '../styles/components/ParallaxLayer1.module.css';
import Image from 'next/image';
import Link from 'next/link';

function ParallaxLayer1(){
    return(
        <div className={styles.container}>
            <div className={styles.containerPrato1}>
                
                <div className={styles.pratoDeComidaContainer}>
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
                </div>
            </div>
            <div className={styles.containerPrato2}>
                
                <div className={styles.pratoDeComidaContainer2}>
                    <Image
                        src="/Grupo_9775.png"
                        alt="Yoomy"
                        width={1355}
                        height={727}
                    />
                </div>
            </div>
        </div>
    )
}

export default ParallaxLayer1