import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

// Styles
import { TextInputCustom } from './styles';

export default function Input({
  name,
  label,
  ...rest
}) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <TextInputCustom>
      {label && (
        <label className="text-size-md" htmlFor={fieldName}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="text-error text-size-sm">{error}</span>}
    </TextInputCustom>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: '',
};
