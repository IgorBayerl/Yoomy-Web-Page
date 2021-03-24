import Link from 'next/link'
import React, { useState } from "react";
import styled from 'styled-components'
import Image from 'next/image';



export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    return(
        <Nav>
            
            <NavContent>
                <Link href="/" passHref>
                    <LogoLink >
                        <Image
                            src="/imagotipo.png"
                            alt="Yoomy"
                            width={205}
                            height={90}
                            priority
                        />
                    </LogoLink>
                </Link>
                {/* <Logo href="">
                    Yoomy
                </Logo> */}
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <MenuContainerDiv>
                        {/* <Fundo/> */}
                        <Link href="/about" passHref>
                            <MenuLink >Aplicativo</MenuLink>
                        </Link>
                        <Link href="/" passHref>
                            <MenuLink >Restaurantes</MenuLink>
                        </Link>
                    </MenuContainerDiv>
                    <Link href="">
                        <MenuLink >Entrar</MenuLink>
                    </Link>
                </Menu>
            </NavContent>
        </Nav>
    );
}

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #1C8676;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;


const MenuContainerDiv = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 769px) {
        flex-direction: row;
        padding-right: 2rem;
    }
`;

const MenuLink = styled.a`
    background-color: #FFF;
    padding: 1rem 0rem;
    width:140px;
    /* height:50px; */
    font-weight:bolder;
    font-size: 1rem;
    margin: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #FBBC05;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: #FFF;
        color: #000;
    }
`;



const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    z-index: 100;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* background: red; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    @media (max-width: 768px) {
        padding: 0 0;
        background: white;
        width:100%;
        box-shadow: 0px 5px 5px #ececec;
    }
`;

const NavContent = styled.div`
    max-width: 1200px;
    flex:1;
    /* background: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    right: 0;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`

const LogoLink = styled.a`
    align-items:center;
    cursor: pointer;
    width: 205px;
    @media (max-width: 943px) {
        width: 130px;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: max-height 0.3s ease-in-out;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in-out;
        width: 100%;
    }
`;



