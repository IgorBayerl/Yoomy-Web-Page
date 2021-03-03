import styles from '../styles/components/NavMobile.module.css';
import Image from 'next/image';
import Link from 'next/link';



function NavMobile(){

    function openNav() {

        document.getElementById("mySidenav").style.width = "450px";
        document.getElementById("menuIcon").style.transform = "rotate(90deg)";
        document.getElementById("closeXButton").style.transform = "rotate(180deg)";
        document.getElementById("optionListDiv").style.fontSize = "20px"
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("menuIcon").style.transform = "rotate(0deg)";
        document.getElementById("closeXButton").style.transform = "rotate(0deg)";
        document.getElementById("optionListDiv").style.fontSize = "0px"
    }

    return(
        <div className={styles.container}>
            <div className={styles.topBar}>
                <Link href={'/'}>
                    <div id={'menuIcon'} className={styles.openMenuButton} onClick={openNav}>
                        <Image
                            src="/menu.svg"
                            alt="Menu"
                            width={50}
                            height={50}
                        />
                    </div>
                </Link>
                <div className={styles.yoomyHeaderContainer}>
                    <div className={styles.yoomyHeaderImage} >
                        <Image
                            src="/imagotipo.png"
                            alt="Yoomy"
                            width={1827}
                            height={797}
                            layout='intrinsic'
                        />
                    </div>
                </div>
                <div className={styles.entrarMenuButtonContainer}>
                    <Link href={'/'}>
                        <a className={styles.entrarMenuButton} >
                            Entrar
                        </a>
                    </Link>
                </div>
            </div>
            <div id={'mySidenav'} className={styles.sideNavContainer}>
                <div className={styles.menuButtonContainer}>
                    <div id={"closeXButton"} className={styles.menuButton} onClick={closeNav}>
                        <Image
                            src="/x.svg"
                            alt="X"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <div id={'optionListDiv'} className={styles.optionsContainer}>
                    <a href="">Aplicativo</a>
                    <a href="">Restaurante</a>
                    <a href="">Blog</a>
                    <a href="">Alooo4</a>
                </div>
                
            </div>
        </div>
    )
}

export default NavMobile