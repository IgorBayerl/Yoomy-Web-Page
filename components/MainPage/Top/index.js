import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import Slider from "react-slick";
import Link from 'next/link';

// Components
import Title from '../Title';
import Subtitle from '../../Subtitle';
import Subsubtitle from '../../Subsubtitle';

// Style
import {BoxContent , ImgContainerLeft, BeforeImageContainer,StoreLinkButtonsContainer} from './styles';

export default function Top() {
  
  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center ">
            <Col xs={12} lg={11}>
              <Row className="align-items-center justify-content-center">
                <Col xs={12} lg={9} xl={6} className="justify-content-between h-100">
                  <BeforeImageContainer className="">

                  
                    {/* <Row>
                      <Col xs="auto">
                        <Subtitle>
                          <span className="color-secondary ">Nosso objetivo é satisfazer cada cliente</span>
                        </Subtitle>
                        <p className="name color-secondary text-size-lg text-center text-sm-left">
                          Baixe o app ou acesse sua conta
                        </p>
                          
                      </Col>
                    </Row> */}

                    <Subtitle>
                        <span className=" color-secondary">Nosso objetivo é satisfazer cada cliente</span>
                    </Subtitle>
                    <Row className="pl-0">
                      <Col lg={10} xl={7}>
                        <p className="text-size-md color-secondary semi-bold text-informations  pt-2 pt-lg-5">
                        Baixe o app ou acesse sua conta.
                        </p>
                      </Col>
                    </Row>
                    <StoreLinkButtonsContainer className="">
                      
                      <Link href="/">
                        <a>
                          <img  src="/images/google-play.png" alt="Google play" title="Google play" className="img-fluid mr-3 mt-2 mb-2 img-footer" />
                        </a>
                      </Link>
                      
                      
                      <Link className="m-3" href="/">
                        <a>
                            <img src="/images/app-store.png" alt="App store" title="App store" className="img-fluid ml-3 mr-3 mt-2 mb-2 img-footer" />
                        </a>
                      </Link>
                      
                    </StoreLinkButtonsContainer>
                  </BeforeImageContainer>
                  
                  <ImgContainerLeft xs={12} lg={6} className="">
                    <img src="/images/dish-square-top.png" alt="Prato" className="" />
                  </ImgContainerLeft>
                </Col>
                
                <Col xs={12} lg={6} className="d-none d-xl-block d-flex">
                  <img src="/images/img-dish.png" alt="Gratuito" className="d-none d-xl-block img-fluid mb-5" />
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )

}
