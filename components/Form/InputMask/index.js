import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

// Styles
import { TextInputCustom } from './styles';

function InputMask({ name, type, mask, label, center, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const defaultValueMask = defaultValue
    ? defaultValue.replace(/[^\d]/g, '')
    : '';

  const [customMask, setMask] = useState(
    defaultValueMask.length <= 10 ? '(99) 9999-9999' : '(99) 99999-9999'
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        if (type === 'tel') {
          setMask(
            value.replace(/[^\d]/g, '').length <= 10
              ? '(99) 9999-9999'
              : '(99) 99999-9999'
          );
        }
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField, type]);

  const handleChange = useCallback((e) => {
    if (inputRef.current && e.keyCode !== 9 && e.keyCode !== 13) {
      const value = inputRef.current.getInputValue().replace(/[^\d]/g, '');
      setMask(
        value.length < 10 || e.keyCode === 8
          ? '(99) 9999-9999'
          : '(99) 99999-9999'
      );
    }
  }, []);

  return (
    <TextInputCustom>
      {label && (
        <label className="text-size-md" htmlFor={fieldName}>
          {label}
        </label>
      )}
      <ReactInputMask
        ref={inputRef}
        defaultValue={defaultValue}
        className={`input-mask-custom ${center && 'center'}`}
        onKeyDown={type === 'tel' ? handleChange : null}
        mask={type === 'tel' ? customMask : mask}
        {...rest}
      />

      {error && <span className="text-error text-size-sm">{error}</span>}
    </TextInputCustom>
  );
}

export default InputMask;

InputMask.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.array || PropTypes.string,
  center: PropTypes.bool,
};

InputMask.defaultProps = {
  type: '',
  label: '',
  center: false,
  mask: [],
};
