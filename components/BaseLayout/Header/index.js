import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

// Style
import {BoxContent} from './styles';

// Icons 
import {HiMenu} from "react-icons/hi";

export default function Header() {
  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row className="justify-content-between align-items-center">
                <Col xs={3} md={4} className="d-lg-none">
                  < HiMenu />
                </Col>
                <Col xs={5} sm="auto">
                    <Link href="/">
                      <a>
                      <img src="/images/logo.png" alt="Yoomy" title="Yoomy" className="img-fluid logo" />
                      </a>
                    </Link>
                </Col>
                <Col xs={4} sm={3} md={4} lg="auto">
                  <Row className="align-items-center justify-content-end h-100">
                    <div className="d-none d-lg-block">
                      <Link href="/restaurantes">
                        <a className="text-decoration-none">
                          <Col className="color-primary text-size-md semi-bold link-header" xs="auto">
                            Restaurante
                          </Col>
                        </a>
                      </Link>
                    </div>
                    <div className="d-none d-lg-block">
                      <Link href="/aplicativo">
                        <a className="text-decoration-none">
                          <Col className="color-primary text-size-md semi-bold link-header" xs="auto">
                            Aplicativo
                          </Col>
                        </a>
                      </Link>
                    </div>
                    <Col xs="auto">
                      <Link href="/login">
                        <a className="text-decoration-none">
                          <button type="button">
                            Entrar
                          </button>
                        </a>
                      </Link>
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
