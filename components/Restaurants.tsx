import styles from '../styles/components/Restaurants.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Restaurants(){
    

    return(
        <div className={styles.container}>
            <div className={styles.titleTextContainer}>
                <h2 className={styles.titleText}>
                    Descubra os melhores restaurantes na sua região 
                </h2>
            </div>
            <ul className={styles.listaDeCards}>
                <li className={styles.card}>
                    <Image
                        src="/mcdonalds-masthead.png"
                        alt="Yoomy"
                        width={153}
                        height={112}
                    />
                    <h2 className={styles.restaurantTitle}>Mc Donalds</h2>
                </li>
                <li className={styles.card}>
                    <Image
                        src="/mcdonalds-masthead.png"
                        alt="Yoomy"
                        width={153}
                        height={112}
                        
                    />
                    <h2 className={styles.restaurantTitle}>Mc Donalds</h2>
                </li>
                <li className={styles.card}>
                    <Image
                        src="/mcdonalds-masthead.png"
                        alt="Yoomy"
                        width={153}
                        height={112}
                    />
                    <h2 className={styles.restaurantTitle}>Mc Donalds</h2>
                </li>
                <li className={styles.card}>
                    <Image
                        src="/mcdonalds-masthead.png"
                        alt="Yoomy"
                        width={153}
                        height={112}
                    />
                    <h2 className={styles.restaurantTitle}>Mc Donalds</h2>
                </li>
                <li className={styles.card}>
                    <Image
                        src="/mcdonalds-masthead.png"
                        alt="Yoomy"
                        width={153}
                        height={112}
                    />
                    <h2 className={styles.restaurantTitle}>Mc Donalds</h2>
                </li>
                <li className={styles.card}>
                    <Image
                        src="/mcdonalds-masthead.png"
                        alt="Yoomy"
                        width={153}
                        height={112}
                    />
                    <h2 className={styles.restaurantTitle}>Mc Donalds</h2>
                </li>
            </ul>
        </div>
    )
}

export default Restaurants