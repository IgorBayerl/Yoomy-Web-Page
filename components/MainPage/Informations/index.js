import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Subtitle from '../../Subtitle';

// Style
import {BoxContent} from './styles';

export default function Informations() {

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
              
              <Row className="align-items-center pt-2 mt-lg-2">
                <Col xs={12} lg={6}>
                  <Subtitle>
                    <span className="color-secondary">Descontos e promoções</span>
                  </Subtitle>
                  <Row>
                    <Col lg={10} xl={7}>
                      <p className="text-size-md semi-bold text-informations pt-2 pt-lg-5">
                      Descontos e promoções exclusivas para usuários. Entre hoje mesmo para ter a sua melhor experiência gastronômica pelo melhor preço.
                      </p>
                    </Col>
                  </Row>
                  {/* <img src="/images/padronagem-promotions.png"alt="Padronagem" className="img-fluid mt-5 img-padronagem d-none d-lg-block" /> */}
                </Col>
                <Col className="pt-lg-5" xs={12} lg={6}>
                  
                  <Row className="justify-content-center justify-content-lg-end">
                    <Col xs="auto">
                      <img src="/images/yoomy-discounts.png"alt="Promoções" className="img-fluid image" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="align-items-center pt-2 mt-5  backgroundPrimary">

                  <Col xs={12} lg={6}>
                    <Subtitle>
                      <span className="color-light m-3">Descontos e promoções</span>
                    </Subtitle>
                    <Row>
                      <Col lg={10} xl={7}>
                        <p className="text-size-md m-3 semi-bold text-informations text-white pt-2 pt-lg-5">
                        Descontos e promoções exclusivas para usuários. Entre hoje mesmo para ter a sua melhor experiência gastronômica pelo melhor preço.
                        </p>
                      </Col>
                    </Row>
                    {/* <img src="/images/padronagem-promotions.png"alt="Padronagem" className="img-fluid mt-5 img-padronagem d-none d-lg-block" /> */}
                  </Col>
                  <Col className="pt-lg-5" xs={12} lg={6}>
                    
                    <Row className="justify-content-center justify-content-lg-end">
                      <Col xs="auto">
                        <img src="/images/yoomy-restaurant.png"alt="Promoções" className="img-fluid image" />
                      </Col>
                    </Row>
                  </Col>
              </Row>
              <Row className="align-items-center pt-2 mt-lg-2">
                <Col xs={12} lg={4}>
                  <Subtitle>
                    <span className="color-secondary">Os principais restaurantes</span>
                  </Subtitle>
                  <Row>
                    <Col lg={10} xl={7}>
                      <p className="text-size-md semi-bold text-informations pt-2 pt-lg-5">
                      Temos os principais restaurantes que você procura pra matar sua fome. É só baixar o app e pedir.
                      </p>
                    </Col>
                  </Row>
                  {/* <img src="/images/padronagem-promotions.png"alt="Padronagem" className="img-fluid mt-5 img-padronagem d-none d-lg-block" /> */}
                </Col>
                <Col className="pt-lg-5 mt-5" xs={12} lg={7}>
                  
                  <Slider {...settings}>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <Col className="justify-content-center align-items-center">
                          <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                          <img src="/images/burger.png" alt="Mc" className="img-fluid" />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <Col className="justify-content-center align-items-center">
                          <img src="/images/burger.png" alt="Mc" className="img-fluid" />
                          <img src="/images/subway.png" alt="Mc" className="img-fluid" />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <Col className="justify-content-center align-items-center">
                          <img src="/images/subway.png" alt="Mc" className="img-fluid" />
                          <img src="/images/girafas.png" alt="Mc" className="img-fluid" />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row className="justify-content-center">
                        <Col className="justify-content-center align-items-center">
                          <img src="/images/girafas.png" alt="Mc" className="img-fluid" />
                          <img src="/images/mc.png" alt="Mc" className="img-fluid" />
                        </Col>
                      </Row>
                    </Col>
                  </Slider>
                </Col>
              </Row>
              <Row className="align-items-center pt-2 mt-lg-2">
                <Col xs={12} lg={6}>
                  <Subtitle>
                    <span className="color-secondary">Onde estamos</span>
                  </Subtitle>
                  <Row>
                    <Col lg={10} xl={6}>
                      <p className="text-size-md semi-bold text-informations pt-2 pt-lg-5">
                      Temos os principais restaurantes que você procura pra matar sua fome. É só baixar o app e pedir.
                      </p>
                    </Col>
                  </Row>
                  {/* <img src="/images/padronagem-promotions.png"alt="Padronagem" className="img-fluid mt-5 img-padronagem d-none d-lg-block" /> */}
                </Col>
                <Col className="pt-lg-5" xs={12} lg={6}>
                  
                  <Row className="justify-content-center justify-content-lg-end">
                    <Col xs="auto">
                      <img src="/images/yoomy-map.png"alt="Promoções" className="img-fluid image" />
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
