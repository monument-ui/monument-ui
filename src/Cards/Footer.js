import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className = '', style = {}, children }) => (
  <div className={`card-footer ${className}`} style={style}>
    {children}
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.node,
  children: PropTypes.node
};

export default Footer;
