import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Styles
import { ContainerCheckbox } from './styles';

export default function CustomCheckbox({
  name,
  children,
  value,
  ...rest
}) {
  const inputRef = useRef([]);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
      getValue(ref) {
        return ref.checked ? ref.value : '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <ContainerCheckbox>
      <Row>
        <Col className="pr-0" xs="auto">
          <label className="container-checkbox">
            <input
              ref={inputRef}
              name={fieldName}
              type="checkbox"
              value={value}
              {...rest}
            />
            <span className="checkmark" />
          </label>
        </Col>
        <Col>
          <Row className="align-items-center">
            <Col style={{ maxWidth: '80%' }} xs="auto" className="pr-0">
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
    </ContainerCheckbox>
  );
}

CustomCheckbox.propTypes = {
  children: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

CustomCheckbox.defaultProps = {
  value: '1',
};
