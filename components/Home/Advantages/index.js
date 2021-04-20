import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Title from '../Title';

// Style
import {BoxContent} from './styles';

export default function Advantages() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
              <Row className="align-items-center justify-content-center">
                <Col xs={12} lg={6} className="d-none d-xl-block">
                  <img src="/images/img-dish.png" alt="Gratuito" className="img-fluid" />
                </Col>
                <Col xs={12} lg={9} xl={6}>
                  <p className="color-light semi-bold subtitle-white">Tudo isso e muito mais</p>
                  <Row>
                    <Col xs="auto">
                      <Title>
                        GRATUITO
                      </Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xl={7}>
                      <p className="color-light text-size-md semi-bold pt-4">Sem pagar nada, além disso trazemos benefícios ao seu negócio como:</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="d-md-none">
                      <Slider {...settings}>
                        <Col xs={12} className="py-3">
                          <div className=" box-info">
                            <Row className="align-items-center justify-content-center">
                              <Col xs="auto" className="pr-0">
                                <div className="icon">
                                  <img src="/images/icon-megaphone.png" alt="Marketing" className="img-fluid" />
                                </div>
                              </Col>
                              <Col>
                                <p className="color-secondary text-size-md font-weight-bold mb-0">Marketing</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col xs={12} className="py-3">
                          <div className=" box-info">
                            <Row className="align-items-center justify-content-center">
                              <Col xs="auto" className="pr-0">
                                <div className="icon">
                                  <img src="/images/icon-ticket.png" alt="Ticket" className="img-fluid" />
                                </div>
                              </Col>
                              <Col>
                                <p className="color-secondary text-size-md font-weight-bold mb-0">Aumento do ticket médio</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col xs={12} className="py-3">
                          <div className=" box-info">
                            <Row className="align-items-center justify-content-center">
                              <Col xs="auto" className="pr-0">
                                <div className="icon">
                                  <img src="/images/icon-walking.png" alt="Redução de filas" className="img-fluid" />
                                </div>
                              </Col>
                              <Col>
                                <p className="color-secondary text-size-md font-weight-bold mb-0">Redução de filas</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col xs={12} className="py-3">
                          <div className=" box-info">
                            <Row className="align-items-center justify-content-center">
                              <Col xs="auto" className="pr-0">
                                <div className="icon">
                                  <img src="/images/icon-envira.png" alt="Higiene" className="img-fluid" />
                                </div>
                              </Col>
                              <Col>
                                <p className="color-secondary text-size-md font-weight-bold mb-0">Higiene e sustentabilidade</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Slider>
                    </Col>
                    <Col xs={12} md={6} className="py-3 d-none d-md-block">
                      <div className=" box-info">
                        <Row className="align-items-center justify-content-center">
                          <Col xs="auto" className="pr-0">
                            <div className="icon">
                              <img src="/images/icon-megaphone.png" alt="Marketing" className="img-fluid" />
                            </div>
                          </Col>
                          <Col>
                            <p className="color-secondary text-size-md font-weight-bold mb-0">Marketing</p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col xs={12} md={6} className="py-3 d-none d-md-block">
                      <div className=" box-info">
                        <Row className="align-items-center justify-content-center">
                          <Col xs="auto" className="pr-0">
                            <div className="icon">
                              <img src="/images/icon-ticket.png" alt="Ticket" className="img-fluid" />
                            </div>
                          </Col>
                          <Col>
                            <p className="color-secondary text-size-md font-weight-bold mb-0">Aumento do ticket médio</p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col xs={12} md={6} className="py-3 d-none d-md-block">
                      <div className=" box-info">
                        <Row className="align-items-center justify-content-center">
                          <Col xs="auto" className="pr-0">
                            <div className="icon">
                              <img src="/images/icon-walking.png" alt="Redução de filas" className="img-fluid" />
                            </div>
                          </Col>
                          <Col>
                            <p className="color-secondary text-size-md font-weight-bold mb-0">Redução de filas</p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col xs={12} md={6} className="py-3 d-none d-md-block">
                      <div className=" box-info">
                        <Row className="align-items-center justify-content-center">
                          <Col xs="auto" className="pr-0">
                            <div className="icon">
                              <img src="/images/icon-envira.png" alt="Higiene" className="img-fluid" />
                            </div>
                          </Col>
                          <Col>
                            <p className="color-secondary text-size-md font-weight-bold mb-0">Higiene e sustentabilidade</p>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
