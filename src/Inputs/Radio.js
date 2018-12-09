import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({
  className = '',
  monument = false,
  style = {},
  checked = false,
  onChange,
  name,
  value
}) => (
  <input
    type="radio"
    className={`input input-radio ${className} ${monument ? 'monument' : ''}`}
    style={style}
    checked={checked}
    onChange={onChange}
    name={name}
    value={value}
    onClick={!checked}
  />
);

Radio.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string
};

export default Radio;
