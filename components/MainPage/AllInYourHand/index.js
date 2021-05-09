import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Title from '../Title';

// Style
import {BoxContent , ImgContainer} from './styles';

export default function Advantages() {
  

  return (
    <BoxContent className="pb-0">
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row className="align-items-center justify-content-center">
                <Col xs={12} lg={9} xl={6}>
                  <p className="color-light semi-bold subtitle-white">Tudo na palma da sua mão!</p>
                  
                  <Row>
                    <Col lg={8} xl={7}>
                      <p className="color-light text-size-md semi-bold pt-4">Um cardápio digital completo, ofertas exclusivas e um guia gastronômico para você encontrar o restaurante perfeito em qualquer ocasião</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="d-md-none">
                      
                    </Col>
                    
                  </Row>
                </Col>
                <Col xs={12} lg={6} className="d-xl-block ">
                  <ImgContainer>
                    <img src="/images/yoomy-hand-phone.png" alt="Gratuito" className="img-fluid" />

                  </ImgContainer>
                </Col>
                
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
