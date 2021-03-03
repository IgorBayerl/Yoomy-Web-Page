import React, { useState, useEffect } from 'react'
import styles from '../styles/components/NavMobile.module.css';
import Image from 'next/image';
import Link from 'next/link';



function NavMobile(){

    const [isNavBarOpen , setIsNavBarOpen] = useState(false)

    function abreOuFechaNavBar(){
        if (isNavBarOpen){
            closeNav()
            // document.getElementById("dropDownMenu").classList.add('open')
            setIsNavBarOpen(false)
        }else{
            openNav()
            // document.getElementById("dropDownMenu").classList.remove('open')
            setIsNavBarOpen(true)
        }
        
    }

    function openNav() {
        document.getElementById("dropDownMenu").style.height = "300px";
        // document.getElementById("mySidenav").style.width = "450px";
        document.getElementById("menuIcon").style.transform = "rotate(90deg)";
        // document.getElementById("closeXButton").style.transform = "rotate(180deg)";
        document.getElementById("optionListDiv").style.fontSize = "25px"
        document.getElementById("optionListDiv").style.height = "300px"
        document.getElementById("closeMenuArea").style.height = "800px"
    }
    
    function closeNav() {
        document.getElementById("dropDownMenu").style.height = "0px";
        // document.getElementById("mySidenav").style.width = "0";
        document.getElementById("menuIcon").style.transform = "rotate(0deg)";
        // document.getElementById("closeXButton").style.transform = "rotate(0deg)";
        document.getElementById("optionListDiv").style.fontSize = "0px"
        document.getElementById("optionListDiv").style.height = "0px"
        document.getElementById("closeMenuArea").style.height = "0px"
        
    }

    return(
        <div className={styles.container}>
            <div className={styles.topBarContainer}>
                <div className={styles.topBar}>

                    <Link href={'/'}>
                        <div id={'menuIcon'} className={styles.openMenuButton} onClick={abreOuFechaNavBar}>
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
                <div id={'dropDownMenu'} className={styles.dropDownMenu}>
                    <div id={'optionListDiv'} className={styles.optionsContainerDropDown}>
                        <a href="">Aplicativo</a>
                        <a href="">Restaurante</a>
                        <a href="">Blog</a>
                    </div>
                </div>
                <div id={'closeMenuArea'} className={styles.closeMenuArea} onClick={closeNav}></div>
            </div>
            {/* <div id={'mySidenav'} className={styles.sideNavContainer}>
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
                
            </div> */}
        </div>
    )
}

export default NavMobile