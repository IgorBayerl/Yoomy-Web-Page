import styles from '../styles/components/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Header(){
    return(
        <div className={styles.headerContainer}>
            <div>
                <Image
                    src="/imagotipo.png"
                    alt="Yoomy"
                    width={205}
                    height={90}
                />
                <input placeholder='Pesquisar'></input>
            </div >
            <div className={styles.buttonsContainerCenter}>
                <div className={styles.headerButtonOrange}>
                    <Link href='/sobre'>
                        <a className={styles.headerButtonOrangeText}>Aplicativo</a>
                    </Link>
                </div>
                <div className={styles.headerButtonOrange}>
                    <Link href='/sobre'>
                        <a className={styles.headerButtonOrangeText}>Restaurante</a>
                    </Link>
                </div>
            </div>
            <div className={styles.entrarButtonContainer}>
                <Link href='/sobre'>
                    <a className={styles.entrarButton}>Entrar</a>
                </Link>
            </div>
        </div>
    )
}

export default Header