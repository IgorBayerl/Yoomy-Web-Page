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
    slidesToShow: 3,
    slidesToScroll: 3,
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
                <span className="color-secondary">Como funciona</span>
              </Subtitle>
              <Row className="justify-content-center pt-5 mt-lg-5">
                <Col xs={12}>
                  <Slider {...settings}>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/download-icon.png" alt="Download" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Baixe o APP</p>
                      <p className="semi-bold text-center text-box-highlight">O aplicativo está disponivel para Android e IOS</p>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/table.png" alt="MesaIcone" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Escolha a sua mesa</p>
                      <p className="semi-bold text-center text-box-highlight">Utilize o qr code pra solicitar uma mesa, você também pode fazer reservas.</p>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <div className="box-icon">
                          <img src="/images/Icon feather-credit-card.png" alt="Atendimento" className="img-fluid" />
                        </div>
                      </Row>
                      <p className="text-size-md text-center font-weight-bold title-box-highlight pt-4 mb-1">Sem filas, sem espera</p>
                      <p className="semi-bold text-center text-box-highlight">As filas acabaram! Peça ou pague de forma fácil através do app</p>
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
