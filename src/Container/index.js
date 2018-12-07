import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ className = '', fluid = false, style = {}, children }) => (
  <div
    className={`container ${className} ${fluid ? 'fluid' : ''}`}
    style={style}
  >
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Container;
