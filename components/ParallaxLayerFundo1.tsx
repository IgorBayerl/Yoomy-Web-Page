import styles from '../styles/components/ParallaxLayerFundo1.module.css';
import Image from 'next/image';
import Link from 'next/link';

function ParallaxLayer1(){
    return(
        <div className={styles.container}>
            <div className={styles.area1}>
                <div className={styles.quadradoBranco1}> </div>
                
            </div>
            <div className={styles.area2}>
                <div className={styles.quadradoBranco2}> </div>
                
            </div>
        </div>
    )
}

export default ParallaxLayer1