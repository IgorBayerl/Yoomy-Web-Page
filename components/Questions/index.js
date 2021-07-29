import React from 'react';
import {Col, Row, Accordion, Card} from 'react-bootstrap';


// Components
import Subtitle from '../Subtitle';

// Style
import {BoxContent} from './styles';

// Icons 
import { HiPlus } from 'react-icons/hi';

export default function Questions() {
  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Row>
                <Col xs={12}>
                  <Subtitle>
                    <span className="color-secondary">Perguntas frequentes</span>
                  </Subtitle>
                  <Row >
                    <Accordion className="w-100">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="0">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                A plataforma é totalmente gratuita?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            O único serviço pago fornecido pela Yoomy é o marketing interativo disponível para restaurantes parceiros na área administrativa. 
                            Todos as outras funcionalidades não geram nenhum custo para os estabelecimentos.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="1">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                A Yoomy possui sistema para delivery?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          No momento não estamos trabalhando com delivery, somente atendimento presencial. 
                          Em breve estaremos ampliando nossas funcionalidades e oferecendo delivery para todos os estabelecimentos parceiros
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="3">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                Eu consigo pagar a conta do restaurante pelo aplicativo?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            O cliente pode sim optar por realizar o pagamento de sua conta utilizando cartão de crédito, débito ou até mesmo pix através do aplicativo Yoomy. 
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="4">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                Como funciona o marketing disponível na plataforma para restaurantes parceiros?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                          Se o restaurante parceiro Yoomy estiver buscando por uma forma de alavancar suas vendas e trazer novos clientes para seu estabelecimento, 
                          ele pode fazer isso através de nossa plataforma. Ao anunciar promoções, aparecer na categoria "melhores restaurantes" ou habilitar recomendação por proximidade, 
                          o restaurante ganha maior visibilidade em nosso aplicativo. Os custos variam dependendo do serviço de marketing utilizado e o estabelecimento só paga se houver resultados
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
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
