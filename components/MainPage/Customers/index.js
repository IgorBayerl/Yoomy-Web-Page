import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Subtitle from '../../Subtitle';

// Style
import {BoxContent} from './styles';

export default function Highlights() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 1
  };

  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              {/* <Subtitle textAlign="center">
                <span className="color-secondary">Atendemos mais de <span className="color-primary">2 MILHÕES DE ESTABELECIMENTOS</span></span>
              </Subtitle>
              <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8} xl={6}>
                  <p className="text-size-md semi-bold text-info-customers text-center pt-2">
                    Junte-se a nós e torne-se um dos milhares de restaurantes que estão melhorando junto conosco o atendimento aos clientes
                  </p>
                </Col>
              </Row> */}
              <Row className="justify-content-center align-items-center pt-5 mt-lg-5">
                
                <Col xs={4} md={4} lg={4} xl={4}>
                  <Subtitle textAlign="left">
                    <span className="color-secondary">Os principais restaurantes </span>
                  </Subtitle>
                  <p className="text-size-md semi-bold text-info-customers text-left pt-2">
                    Junte-se a nós e torne-se um dos milhares de restaurantes que estão melhorando junto conosco o atendimento aos clientes
                  </p>
                </Col>
                <Col xs={8}>
                  <Slider {...settings}>
                    <Col className="justify-content-center align-items-center">
                      <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                    </Col>
                    <Col className="justify-content-center align-items-center">
                      <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                    </Col>
                    <Col className="justify-content-center align-items-center">
                      <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                    </Col>
                    <Col className="justify-content-center align-items-center">
                      <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                    </Col>
                    <Col className="justify-content-center align-items-center">
                      <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                    </Col>
                    <Col className="justify-content-center align-items-center">
                      <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                    </Col>
                    
                  </Slider>
                  {/* <Slider {...settings}> */}
                    {/* <Row >
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
                    </Row>
                    <Row>
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
                    </Row> */}
                    
                    
                  {/* </Slider> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
