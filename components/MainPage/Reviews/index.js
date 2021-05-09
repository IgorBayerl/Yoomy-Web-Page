import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";


// Components
import Subtitle from '../../Subtitle';

// Style
import {BoxContent} from './styles';

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const reviews = [
    {
      Id: '1',
      Imagem: '/images/logo-house.png',
      Nome: 'Hambúrger master',
      Review: 'Melhor plataforma, nunca tive problema nenhum, simplesmente perfeita. Sem contar que é tudo gratuito.',
    },
    {
      Id: '2',
      Imagem: '/images/logo-house.png',
      Nome: 'Hambúrger Hambúrger',
      Review: 'Melhor plataforma, nunca tive problema nenhum, simplesmente perfeita. Sem contar que é tudo gratuito.',
    },
    {
      Id: '3',
      Imagem: '/images/logo-house.png',
      Nome: 'Master master',
      Review: 'Melhor plataforma, nunca tive problema nenhum, simplesmente perfeita. Sem contar que é tudo gratuito.',
    },
    {
      Id: '4',
      Imagem: '/images/logo-house.png',
      Nome: 'Master',
      Review: 'Melhor plataforma, nunca tive problema nenhum, simplesmente perfeita. Sem contar que é tudo gratuito.',
    },
  ];

  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row className="align-items-center">
                <Col xs={12} lg={6}>
                  <Row className="px-3 justify-content-center justify-content-lg-start">
                    <img src="/images/friends.png" alt="Reviews" className="img-fluid" />
                  </Row>
                </Col>
                <Col xs={12} lg={6} className="pt-5 pt-lg-0">
                  <Subtitle>
                    <span className="color-secondary">Nosso objetivo é satisfazer cada cliente</span>
                  </Subtitle>
                  <Row className="justify-content-center pt-4 pt-lg-5">
                    <Col xs={12}>
                      <Slider {...settings}>
                        {reviews.map((review) => {
                          return(
                            <Col key={review.Id} xs={12} className="box-review">
                              <Row className="align-items-center justify-content-center">
                                <Col xs={12} sm="auto">
                                  <Row className="px-3 justify-content-center">
                                    <img src={review.Imagem} alt="Cliente" className="img-fluid" />
                                  </Row>
                                </Col>
                                <Col className="pt-4 pt-sm-0">
                                  <p className="name font-weight-bold text-center text-sm-left">
                                    {review.Nome}
                                  </p>
                                  <p className="review semi-bold text-size-md mb-0 text-center text-sm-left">
                                    "{review.Review}"
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                          );
                        })}
                      </Slider>
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
