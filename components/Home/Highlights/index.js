import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Subtitle from '../../Subtitle';

// Style
import {BoxContent} from './styles';

export default function Highlights() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Subtitle textAlign="center">
                <span className="color-secondary">Por que escolher a Yoomy</span>
              </Subtitle>
              <Row className="justify-content-center pt-5 mt-lg-5">
                <Col xs={12}>
                  <Slider {...settings}>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/star.png" alt="Destaque" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Destaque</p>
                      <p className="semi-bold text-center text-box-highlight">Ganhe destaque e atraia novos clientes</p>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/gear.png" alt="Gestão" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Gestão</p>
                      <p className="semi-bold text-center text-box-highlight">Administre seu negócio com maior facilidade</p>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/tray.png" alt="Atendimento" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Atendimento</p>
                      <p className="semi-bold text-center text-box-highlight">Melhore seu atendimento e satisfaça seus clientes</p>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/cash.png" alt="Gratuito" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Gratuito</p>
                      <p className="semi-bold text-center text-box-highlight">Autoatendimento e painel com as informações que você precisa</p>
                    </Col>
                  </Slider>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
