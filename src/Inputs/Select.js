import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  className = '',
  monument = false,
  style = {},
  onChange,
  value,
  children
}) => (
  <select
    className={`input input-select ${className} ${monument ? 'monument' : ''}`}
    style={style}
    onChange={onChange}
    value={value}
  >
    {children}
  </select>
);

Select.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node
};

export default Select;
