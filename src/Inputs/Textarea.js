import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  className = '',
  monument = false,
  resizable = false,
  style = {},
  onChange,
  name,
  value,
  placeholder,
  disabled,
  readonly,
  required
}) => (
  <textarea
    className={`input input-textarea ${className} ${
      monument ? 'monument' : ''
    } ${resizable ? 'resizable' : ''}`}
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

Textarea.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  resizable: PropTypes.bool,
  style: PropTypes.object,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  required: PropTypes.bool
};

export default Textarea;
