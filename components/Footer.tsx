import Link from 'next/link'
import React, { useState } from "react";
import styled from 'styled-components'
import Image from 'next/image';

const Nav = styled.div`
    height:80px;
    width:100px;
    background: red;
`
export default function Footer(){
    return(
        <FooterContainer >
            <nav>
                <Coluna>
                    <ul>
                        <Image
                            src="/imagotipo.png"
                            alt="Yoomy"
                            width={200}
                            height={90}
                        />
                        <li>Disponivel no google play</li>
                        <li>Disponivel na app store</li>
                    </ul>
                </Coluna>
                <Coluna>
                    <ul>
                        <h3>Informacoes</h3>
                        <li>inicio</li>
                        <li>quero ser parceiro</li>
                        <li>quero ser entregador</li>
                        <li>suporte</li>
                        <li>como pedir</li>
                        <li>como pedir</li>
                    </ul>
                </Coluna>
                <Coluna>
                    <ul>
                        <h3>Politicas e termos</h3>
                        <li>Termos e condilcoes</li>
                        <li>Politica de processamento de dados</li>
                    </ul>
                </Coluna>
                <Coluna>
                    <ul>
                        <h3>Redes sociais</h3>
                        <li><a>Facebook</a></li>
                        <li>Instagram</li>
                    </ul>
                </Coluna>
            </nav>
            <FooterFooter>
                <p>2021 Todos os direitos reservados a Yoomy </p>
            </FooterFooter>
            
        </FooterContainer>
    );
}


const FooterContainer = styled.div`
    background-color: #FBF8F8;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 943px) {
        font-size: 14px;
    }
    nav{
        width: 100%;
        max-width: 1200px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding: 0 1rem;
        align-items: flex-start;
        @media (max-width: 768px) {
            /* align-items: center; */
            flex-direction: column;
        }
    }
    li{
        list-style: none;
        a{
            cursor: pointer;
        }
    }
    
`
const Coluna = styled.div`
    /* width: 20vw; */
`

const FooterFooter = styled.div`
    display:flex;
    justify-content:center;
`