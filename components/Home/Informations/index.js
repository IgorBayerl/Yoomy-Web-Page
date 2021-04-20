import React from 'react';
import {Col, Row} from 'react-bootstrap';

// Components
import Subtitle from '../../Subtitle';

// Style
import {BoxContent} from './styles';

export default function Informations() {
  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Subtitle hr textAlign="center">
                <span className="color-secondary">A inovação no seu restaurante</span>
              </Subtitle>
              <Row className="align-items-center pt-4 pt-lg-5">
                <Col xs={12} lg={6}>
                  <Subtitle>
                    <span className="color-secondary">Cardápio digital</span>
                  </Subtitle>
                  <Row>
                    <Col lg={10} xl={7}>
                      <p className="text-size-md semi-bold text-informations pt-2 pt-lg-5">
                        Um cardápio digital intuitivo que pode ser acessado através de um QR code na mesa, 
                        ou pelo próprio aplicativo através da proximidade
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={6}>
                  <Row className="justify-content-center justify-content-lg-end">
                    <Col xs="auto">
                      <img src="/images/img-menu.png"alt="Cardápio digital" className="img-fluid image" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="align-items-center pt-5 mt-lg-5">
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                  <Row className="justify-content-center justify-content-lg-start px-3">
                    <Col className="box-img-guia p-5" xs="auto">
                      <img src="/images/img-guia.png"alt="Guia gastronômico" className="img-fluid image" />
                    </Col>
                  </Row>
                </Col>
                <Col className="pl-lg-5" xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                  <Subtitle>
                    <span className="color-secondary pl-lg-5">Guia gastronômico</span>
                  </Subtitle>
                  <Row className="pl-lg-5">
                    <Col lg={10} xl={8}>
                      <p className="text-size-md semi-bold text-informations pt-2 pt-lg-5">
                        O aplicativo funciona como um guia para seus usuários, pessoas que não conhecem a região ou buscam por
                        novos restaurantes podem através do aplicativo obter informações como distância, conteúdo do cardápio, 
                        avaliações e localização.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="align-items-center pt-5 mt-lg-5">
                <Col xs={12} lg={6}>
                  <Subtitle>
                    <span className="color-secondary">Promoções</span>
                  </Subtitle>
                  <Row>
                    <Col lg={10} xl={7}>
                      <p className="text-size-md semi-bold text-informations pt-2 pt-lg-5">
                        Anuncie promoções em nossa plataforma e atraia novos clientes para seu estabelecimento.
                      </p>
                    </Col>
                  </Row>
                  <img src="/images/padronagem-promotions.png"alt="Padronagem" className="img-fluid mt-5 img-padronagem d-none d-lg-block" />
                </Col>
                <Col className="pt-lg-5" xs={12} lg={6}>
                  <Row className="d-none d-lg-block position-relative" style={{ height: '1px' }}>
                    <Col xs="auto">
                      <div className="padronagem-absolute">
                        <img src="/images/padronagem-guia.png"alt="Padronagem" className="img-fluid mt-5 img-padronagem" />
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center justify-content-lg-end">
                    <Col xs="auto">
                      <img src="/images/promotions.png"alt="Promoções" className="img-fluid image" />
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
