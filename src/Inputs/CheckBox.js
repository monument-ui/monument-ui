import React from 'react';
import PropTypes from 'prop-types';

const types = ['box', 'switch'];

const CheckBox = ({
  className = '',
  monument = false,
  style = {},
  checked = false,
  onChange,
  name,
  type,
  value
}) => (
  <input
    type="checkbox"
    className={`input input-checkbox ${className} ${
      monument ? 'monument' : ''
    } ${types.includes(type) ? type : 'box'}`}
    style={style}
    checked={checked}
    onChange={onChange}
    name={name}
    value={value}
    onClick={!checked}
  />
);

CheckBox.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default CheckBox;
