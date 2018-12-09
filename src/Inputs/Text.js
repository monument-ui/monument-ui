import React from 'react';
import PropTypes from 'prop-types';

const types = [
  'text',
  'email',
  'tel',
  'url',
  'search',
  'datetime-local',
  'month',
  'time',
  'week'
];

const Text = ({
  type,
  className = '',
  monument = false,
  style = {},
  onChange,
  name,
  value,
  placeholder,
  disabled,
  autocomplete,
  autofocus
}) => (
  <input
    type={types.includes(type) ? type : 'text'}
    className={`input input-text ${className} ${monument ? 'monument' : ''}`}
    style={style}
    onChange={onChange}
    name={name}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    autoComplete={autocomplete}
    autoFocus={autofocus}
  />
);

Text.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.object,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autocomplete: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Text;
