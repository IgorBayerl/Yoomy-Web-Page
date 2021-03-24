import Link from 'next/link'
import React, { useState } from "react";
import styled from 'styled-components'
import Image from 'next/image';



export default function Introduction(){
    return(
        <ContainerMaster >

            
            <QuadradoFundoInicio/>
            <ContentContainer >
                <LeftContentContainer >
                    <h2 >Sua fome acaba aqui!</h2>
                    <h5 >Baixe o app ou acesse sua conta</h5>
                    <ButtonsContainer >
                        <Link href='/about'>
                            <StoreButtonLink >
                                <Image
                                    src="/disponivel_no_google_play.png"
                                    alt="Yoomy"
                                    width={254}
                                    height={76}
                                    priority
                                />
                            </StoreButtonLink>
                        </Link>
                        <Link href='/about'>
                            <StoreButtonLink  >
                                <Image
                                    src="/baixar_na_app_store.png"
                                    alt="Yoomy"
                                    width={254}
                                    height={76}
                                    priority
                                />
                            </StoreButtonLink>
                        </Link>
                    </ButtonsContainer>
                    
                </LeftContentContainer> 
                <RightImageContainer>
                    <Image
                        src="/Yoomy_padronagem_com_prato.png"
                        alt="Yoomy"
                        width={872}
                        height={742}
                        priority
                    />
                </RightImageContainer>
            </ContentContainer>
        </ContainerMaster>
    )
}


const ContainerMaster = styled.div`
    /* background-color: red; */
`

const QuadradoFundoInicio = styled.div`
    position: relative;
    background-color: white;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 70px;
    top: -100px;
    display: flex;
    right: 13rem;
    margin-left: -10rem;
    height:50rem;
    /* width:90vw; */
    @media (max-width: 768px) {
        position: absolute;
        height: 35rem;
        display: flex;
        border-bottom-right-radius: 0;
        top: 0;
        left: 0;
        width: 100%;
    }
    
`

const ContentContainer = styled.div`
    display: flex;
    
    width: 97vw;
    max-width: 1200px;
    z-index: 10;
    /* background-color: white; */
    padding: 0 1rem;
    justify-content: space-between;
    h2{
        color: #1C8676;
        font-size: 2.2rem;
        margin: 0.5rem 0;
    }
    h5{
        color: #999999;
        font-size: 1.2rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
    @media (min-width: 769px) {
        position: relative;
        top: -50rem;
    }
    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        padding: 0 1rem;
    }
`

const LeftContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    padding: 6rem 0;
    /* background-color: yellowgreen; */
`

const RightImageContainer = styled.div`
    /* background-color: green; */
    width:40vw;
    max-width: 600px;
    padding-top: 5rem;
    @media (max-width: 768px) {
        display: none;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: blue; */
`

const StoreButtonLink = styled.a`
    /* background-color: red; */
    margin-right: 20px;
    padding: 0;
    cursor: pointer;
`
