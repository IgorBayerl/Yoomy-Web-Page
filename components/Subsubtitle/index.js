import React from 'react';
import {Col, Row} from 'react-bootstrap';

// Style
import {BoxContent} from './styles';

export default function Subsubtitle({children, textAlign, hr}) {
  return (
    <BoxContent textAlign={textAlign}>
      <Row className={`${textAlign == 'center' ? 'justify-content-center align-items-center' : ''}`}>
        {hr && <Col className="hr-subtitle" xs="auto" />}
        <Col xs={`${hr ? 8 : 12}`} sm={`${hr ? 10 : 12}`} md="auto">
          {children}
        </Col>
        {hr && <Col className="hr-subtitle" xs="auto" />}
      </Row>
    </BoxContent>
  )
}
