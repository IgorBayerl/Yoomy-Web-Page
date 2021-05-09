import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Title from '../Title';
import Subtitle from '../../Subtitle';

// Style
import {BoxContent , ImgContainer} from './styles';

export default function Discounts() {
  

  return (
    <BoxContent className="pb-0">
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row className="align-items-center justify-content-center">
                <Col xs={12} lg={9} xl={4}>
                  <Subtitle className="text-center">
                    <span className="text-center color-secondary ">Descontos e promoções</span>
                  </Subtitle>
                  <p className="name color-secondary text-size-md text-center text-sm-left ">
                  Descontos e promoções exclusivas para usuários. Entre hoje mesmo para ter a sua melhor experiência gastronômica pelo melhor preço.
                  </p>
                </Col>
                <Col xs={12} lg={8} className="d-xl-block ">
                  <ImgContainer className="d-flex align-items-center justify-content-end">
                    <img src="/images/yoomy-discounts.png" alt="yoomy-promotions" className="" />

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
