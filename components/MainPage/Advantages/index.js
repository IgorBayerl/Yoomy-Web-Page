import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Title from '../Title';
import Subtitle from '../../Subtitle';

// Style
import {BoxContent, RestaurantCardContainer , RestaurantCardContainer2} from './styles';

export default function AllInYourHand() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
        },
      },
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
                <span className="color-light">Descubra os melhores restaurantes na sua região</span>
              </Subtitle>
              <Row className="justify-content-center pt-5 mt-lg-5">
                <Col xs={12}>
                  <Slider {...settings}>
                    <Col xs={12}>
                      <RestaurantCardContainer>

                        <div className="justify-content-center">
                          <img src="/images/subwaycol.png" alt="Download" className="img-fluid" />
                        </div>
                        <p className="text-size-md  font-weight-bold title-box-highlight ">Subway</p>
                      </RestaurantCardContainer>
                    </Col>
                    <Col xs={12}>
                      <RestaurantCardContainer2>

                        <div className="justify-content-center">
                          <img src="/images/Mccol.png" alt="Download" className="img-fluid" />
                        </div>
                        <p className="text-size-md  font-weight-bold title-box-highlight ">Subway</p>
                      </RestaurantCardContainer2>
                    </Col>
                    <Col xs={12}>
                      <RestaurantCardContainer>

                        <div className="justify-content-center">
                          <img src="/images/subwaycol.png" alt="Download" className="img-fluid" />
                        </div>
                        <p className="text-size-md  font-weight-bold title-box-highlight ">Subway</p>
                      </RestaurantCardContainer>
                    </Col>
                    <Col xs={12}>
                      <RestaurantCardContainer2>

                        <div className="justify-content-center">
                          <img src="/images/Mccol.png" alt="Download" className="img-fluid" />
                        </div>
                        <p className="text-size-md  font-weight-bold title-box-highlight ">Subway</p>
                      </RestaurantCardContainer2>
                    </Col>
                    <Col xs={12}>
                      <RestaurantCardContainer>

                        <div className="justify-content-center">
                          <img src="/images/subwaycol.png" alt="Download" className="img-fluid" />
                        </div>
                        <p className="text-size-md  font-weight-bold title-box-highlight ">Subway</p>
                      </RestaurantCardContainer>
                    </Col>
                    <Col xs={12}>
                      <RestaurantCardContainer2>

                        <div className="justify-content-center">
                          <img src="/images/Mccol.png" alt="Download" className="img-fluid" />
                        </div>
                        <p className="text-size-md  font-weight-bold title-box-highlight ">Subway</p>
                      </RestaurantCardContainer2>
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
