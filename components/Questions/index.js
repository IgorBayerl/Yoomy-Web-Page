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
                                Tenho que pagar alguma coisa?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="1">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                Tenho que pagar alguma coisa?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Pretium fusce id velit ut tortor pretium viverra suspendisse. 
                          In vitae turpis massa sed elementum. Mauris pharetra et ultrices neque ornare aenean euismod elementum. 
                          Adipiscing diam donec adipiscing tristique risus nec feugiat. Augue interdum velit euismod in pellentesque massa placerat duis. 
                          Nulla aliquet enim tortor at auctor urna nunc. Lectus urna duis convallis convallis. Egestas dui id ornare arcu odio ut sem. 
                          Etiam non quam lacus suspendisse faucibus interdum. Adipiscing elit duis tristique sollicitudin. Pulvinar etiam non quam lacus 
                          suspendisse faucibus interdum posuere lorem. Morbi tristique senectus et netus et malesuada fames ac turpis. Eu scelerisque felis 
                          imperdiet proin.

                          Amet nisl purus in mollis nunc sed id. At augue eget arcu dictum varius. Morbi blandit cursus risus at ultrices mi 
                          tempus imperdiet nulla. Blandit turpis cursus in hac habitasse platea dictumst. Pulvinar etiam non quam lacus suspendisse 
                          faucibus interdum. Accumsan tortor posuere ac ut consequat. Gravida cum sociis natoque penatibus. Id nibh tortor id 
                          aliquet lectus proin nibh nisl condimentum. Ut venenatis tellus in metus vulputate eu scelerisque felis. Aliquam sem 
                          fringilla ut morbi tincidunt augue interdum velit euismod. Suspendisse sed nisi lacus sed viverra. Risus commodo viverra 
                          maecenas accumsan lacus vel facilisis. Scelerisque purus semper eget duis at.

                          Urna duis convallis convallis tellus id interdum velit laoreet id. Egestas integer eget 
                          aliquet nibh. At urna condimentum mattis pellentesque id nibh tortor. Id semper risus in 
                          hendrerit gravida rutrum quisque non tellus. Magnis dis parturient montes nascetur ridiculus. 
                          Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Tellus at urna condimentum mattis. 
                          Cursus euismod quis viverra nibh cras. Tellus mauris a diam maecenas. Amet risus nullam eget felis eget nunc.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="3">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                Tenho que pagar alguma coisa?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle className="accordion-title" eventKey="4">
                            <Row className="justify-content-between align-items-center w-100">
                              <Col className="text-left semi-bold">
                                Tenho que pagar alguma coisa?
                              </Col>
                              <Col xs="auto" className="text-right pr-0">
                                <HiPlus />
                              </Col>
                            </Row>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Pretium fusce id velit ut tortor pretium viverra suspendisse. 
                          In vitae turpis massa sed elementum. Mauris pharetra et ultrices neque ornare aenean euismod elementum. 
                          Adipiscing diam donec adipiscing tristique risus nec feugiat. Augue interdum velit euismod in pellentesque massa placerat duis. 
                          Nulla aliquet enim tortor at auctor urna nunc. Lectus urna duis convallis convallis. Egestas dui id ornare arcu odio ut sem. 
                          Etiam non quam lacus suspendisse faucibus interdum. Adipiscing elit duis tristique sollicitudin. Pulvinar etiam non quam lacus 
                          suspendisse faucibus interdum posuere lorem. Morbi tristique senectus et netus et malesuada fames ac turpis. Eu scelerisque felis 
                          imperdiet proin.

                          Amet nisl purus in mollis nunc sed id. At augue eget arcu dictum varius. Morbi blandit cursus risus at ultrices mi 
                          tempus imperdiet nulla. Blandit turpis cursus in hac habitasse platea dictumst. Pulvinar etiam non quam lacus suspendisse 
                          faucibus interdum. Accumsan tortor posuere ac ut consequat. Gravida cum sociis natoque penatibus. Id nibh tortor id 
                          aliquet lectus proin nibh nisl condimentum. Ut venenatis tellus in metus vulputate eu scelerisque felis. Aliquam sem 
                          fringilla ut morbi tincidunt augue interdum velit euismod. Suspendisse sed nisi lacus sed viverra. Risus commodo viverra 
                          maecenas accumsan lacus vel facilisis. Scelerisque purus semper eget duis at.

                          Urna duis convallis convallis tellus id interdum velit laoreet id. Egestas integer eget 
                          aliquet nibh. At urna condimentum mattis pellentesque id nibh tortor. Id semper risus in 
                          hendrerit gravida rutrum quisque non tellus. Magnis dis parturient montes nascetur ridiculus. 
                          Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Tellus at urna condimentum mattis. 
                          Cursus euismod quis viverra nibh cras. Tellus mauris a diam maecenas. Amet risus nullam eget felis eget nunc.
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
