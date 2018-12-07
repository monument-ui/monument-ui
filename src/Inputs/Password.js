import React from 'react';
import PropTypes from 'prop-types';

const Password = ({
  className = '',
  monument = false,
  style = {},
  onChange,
  name,
  value,
  placeholder,
  disabled,
  readonly,
  required
}) => (
  <input
    type="password"
    className={`input input-password ${className} ${
      monument ? 'monument' : ''
    }`}
    style={style}
    onChange={onChange}
    name={name}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    readOnly={readonly}
    required={required}
  />
);

Password.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.node,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  required: PropTypes.bool
};

export default Password;
