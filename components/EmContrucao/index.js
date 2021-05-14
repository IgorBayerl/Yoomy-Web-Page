import React from 'react';
import {Col, Row, Accordion, Card} from 'react-bootstrap';
import Link from 'next/link';


// Components
import Subtitle from '../Subtitle';
import Title from '../Title';

// Style
import {BoxContent, ImageBG, CardGlass, AButton} from './styles';

// Icons 
import { HiPlus } from 'react-icons/hi';

export default function EmConstrucao() {
  return (
    <BoxContent>
      
      {/* <div className="flex flex-wrap">
        <div className="lg:block flex w-full">
          <div className="absolute inset-0 bg-gray-800 z-10 opacity-50" />
          <img className="absolute inset-0 h-full w-full object-cover z-0 opacity-50" src="" alt="" />
          <div className="absolute bottom-0 inset-x-0 mx-auto xl:mb-40 md:mb-40 mb-10 w-full text-center" style={{zIndex: 10}}>
            <h2 className="mb-2 xl:text-8xl lg:text-6xl text-4xl text-yellow-400 font-bold font-heading">Página em Construção</h2>
            <div className="w-7/12 mx-auto mt-2 mb-6">
              <h2 className="mb-2 lg:text-6xl xl:text-4xl text-1xl text-white font-bold font-heading">Estamos trabalhando em melhorias, a página estará disponível em breve</h2>
            </div>
            <div className="mt-6 lg:block"><a className="inline-block py-3 px-8 text-sm text-white font-bold leading-normal bg-yellow-400 hover:bg-yellow-300 rounded transition duration-200" href="#">Home</a></div>
          </div>
        </div>
      </div> */}
      
      <ImageBG className="limit" >
        <Col xs={12} className="justify-content-center d-flex ">
          <Row className="justify-content-center  ">
            <Col xs={12} lg={11} className="d-flex justify-content-center ">
              <Row className="d-flex justify-content-center ">
                <CardGlass className="py-5 px-4"> 

                
                <Col xs={12} className="d-flex flex-column align-items-center justify-content-center">
                  <Title hr textAlign="center">
                    <span className="color-light">Pagina em construção</span>
                  </Title>
                  <Subtitle textAlign="center">
                    <h1 className="color-light mt-5">Estamos trabalhando em melhorias, a página estará disponível em breve</h1>
                  </Subtitle>
                  <Link href="/" className="mt-5 ">
                    <AButton className="text-decoration-none d-flex justify-content-center flex-column mt-3">
                      <button type="button ">
                        Voltar a pagina inicial
                      </button>
                    </AButton>
                  </Link>
                </Col>
                </CardGlass>
              </Row>
            </Col>
          </Row>
        </Col>
      </ImageBG>
    </BoxContent>
  )
}
