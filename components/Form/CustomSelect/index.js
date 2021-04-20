/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { Option } from 'rc-select';
// import { useFormContext } from 'react-hook-form';

// Estilo
import DefaultSelect from './styles';

function CustomSelect({
  label,
  name,
  load,
  afterChange,
  onChange,
  form,
  ...props
}) {
  const [value, setValue] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const inputRef = React.useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue: (ref) => {
        return ref.props.value;
      },
      clearValue: (ref) => {
        ref.value = null;
        setValue(null);
      },
      setValue: (ref, vl) => {
        ref.value = vl;
        setValue(vl);
      },
    });

    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue, fieldName, registerField]);

  const onBlur = () => {
    setOpen(false);
  };

  const onFocus = () => {
    setOpen(true);
  };

  const onDropdownVisibleChange = (op) => {
    setOpen(op);
  };

  const customProps = {};
  if (!props.value) {
    props.value = value;
  }

  if (!props.children && props.options) {
    props.children = props.options.map((op, idx) => {
      return (
        <Option key={idx} value={op.value} text={op.label}>
          {op.label}
        </Option>
      );
    });
  }

  return (
    <div style={{ position: 'relative' }}>
      {label && (
        <label
          className="text-size-md color-primary"
          style={{ letterSpacing: '3px' }}
          htmlFor={fieldName}
        >
          {label}
        </label>
      )}
      <DefaultSelect
        className={`${props.borderTel ? 'border-tel' : ''}`}
        open={open}
        onBlur={onBlur}
        onFocus={onFocus}
        onDropdownVisibleChange={onDropdownVisibleChange}
        ref={inputRef}
        autoComplete="none"
        onChange={
          onChange ||
          ((vl) => {
            setValue(vl);
            if (form && form.current) {
              form.current.setFieldValue(name, vl);
            }

            if (afterChange) {
              const selectedProps = inputRef?.current?.props?.children
                ?.filter((val) => val.props.value == vl)
                .map((val) => val.props);
              afterChange(vl, selectedProps);
            }
          })
        }
        {...props}
        {...customProps}
      />

      {error && <span className="text-error text-size-sm">{error}</span>}
    </div>
  );
}

CustomSelect.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  mode: PropTypes.string,
  error: PropTypes.any,
  success: PropTypes.any,
  onChange: PropTypes.func,
  load: PropTypes.func,
  value: PropTypes.any,
  form: PropTypes.any,
  afterChange: PropTypes.func,
};

CustomSelect.defaultProps = {
  label: undefined,
  id: undefined,
  name: undefined,
  error: false,
  success: false,
  load: undefined,
  onChange: undefined,
  value: undefined,
  mode: undefined,
  form: undefined,
  afterChange: undefined,
};

export default CustomSelect;
