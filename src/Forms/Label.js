import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ className = '', style = {}, children }) => (
  <label className={`${className}`} style={style}>
    {children}
  </label>
);

Label.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Label;
