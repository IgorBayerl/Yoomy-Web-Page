import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

// Style
import {BoxContent} from './styles';

export default function Footer() {
  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row>
                <Col className="pt-4 pt-lg-0" xs={{span: 12, order: 4}} sm={6} md={12} lg={{span: 3, order: 1}}>
                  <Row className="justify-content-center">
                    <Col className="mb-4 mb-md-0 mb-lg-4" xs={{span: 'auto', order: 1}} sm={12} md={{span: 'auto', order: 2}} lg={{span: 12, order: 1}}>
                      <Link href="/">
                        <a>
                      <img src="/images/logo.png" alt="Yoomy" title="Yoomy" className="img-fluid img-footer" />
                        </a>
                      </Link>
                    </Col>
                    <Col className="mb-2 mb-md-0 mb-lg-2" xs={{span: 'auto', order: 2}} sm={12} md={{span: 'auto', order: 1}} lg={{span: 12, order: 2}}>
                      <Link href="/">
                        <a>
                          <img src="/images/google-play.png" alt="Google play" title="Google play" className="img-fluid img-footer" />
                        </a>
                      </Link>
                    </Col>
                    <Col xs={{span: 'auto', order: 3}} sm={12} md={{span: 'auto', order: 3}} lg={{span: 12, order: 3}}>
                      <Link href="/">
                        <a>
                            <img src="/images/app-store.png" alt="App store" title="App store" className="img-fluid img-footer" />
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col xs={{span: 12, order: 1}} sm={6} md={4} lg={{span: 3, order: 2}}>
                  <p className="text-size-md font-weight-bold title-footer">Informações</p>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Inicio</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Quero ser parceiro</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Quero ser entregador</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Suporte</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Como pedir</p>
                    </a>
                  </Link>
                </Col>
                <Col className="pt-4 pt-sm-0" xs={{span: 12, order: 2}} sm={6} md={4} lg={{span: 3, order: 3}}>
                  <p className="text-size-md font-weight-bold title-footer">Políticas e termos</p>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Termos e condições</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <p className="semi-bold subtitle-footer link-footer mb-1">Política de processamento de dados</p>
                    </a>
                  </Link>
                </Col>
                <Col className="pt-4 pt-md-0" xs={{span: 12, order: 3}} sm={6} md={4} lg={{span: 3, order: 4}}>
                  <p className="text-size-md font-weight-bold title-footer">Redes sociais</p>
                  <Row className="px-3">
                    <Link href="/">
                      <a>
                        <Col className="pr-3 pl-0 pb-3" xs="auto">
                          <img src="/images/icon-facebook.png" alt="Facebook" title="Facebook" className="img-fluid social-icon" />
                        </Col>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Col className="pr-3 pl-0 pb-3" xs="auto">
                          <img src="/images/icon-instagram.png" alt="Instagram" title="Instagram" className="img-fluid social-icon" />
                        </Col>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Col className="pr-3 pl-0 pb-3" xs="auto">
                          <img src="/images/icon-twitter.png" alt="Twitter" title="Twitter" className="img-fluid social-icon" />
                        </Col>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <Col className="pr-3 pl-0 pb-3" xs="auto">
                          <img src="/images/icon-youtube.png" alt="Youtube" title="Youtube" className="img-fluid social-icon" />
                        </Col>
                      </a>
                    </Link>
                  </Row>
                </Col>
              </Row>
              <div className="hr-footer" />
              <p className="semi-bold subtitle-footer text-center mb-1">2021 Todos os direitos reservados a Yoomy</p>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
