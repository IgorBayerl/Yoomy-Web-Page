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
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
                <span className="color-secondary">Atendemos mais de <span className="color-primary">2 MILHÕES DE ESTABELECIMENTOS</span></span>
              </Subtitle>
              <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8} xl={6}>
                  <p className="text-size-md semi-bold text-info-customers text-center pt-2">
                    Junte-se a nós e torne-se um dos milhares de restaurantes que estão melhorando junto conosco o atendimento aos clientes
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center pt-5 mt-lg-5">
                <Col xs={12}>
                  <Slider {...settings}>
                    <Col xs={12}>
                      <Row className="justify-content-center align-items-center">
                        <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center align-items-center">
                        <img src="/images/subway.png" alt="Mc" className="img-fluid" />
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center align-items-center">
                        <img src="/images/burger.png" alt="Mc" className="img-fluid" />
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center align-items-center">
                        <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center align-items-center">
                        <img src="/images/subway.png" alt="Mc" className="img-fluid" />
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center align-items-center">
                        <img src="/images/burger.png" alt="Mc" className="img-fluid" />
                      </Row>
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
