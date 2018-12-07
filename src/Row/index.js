import React from 'react';
import PropTypes from 'prop-types';

import './Row.scss';

const Row = ({ className = '', style = {}, children }) => (
  <div className={`row ${className}`} style={style}>
    {children}
  </div>
);

Row.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Row;
