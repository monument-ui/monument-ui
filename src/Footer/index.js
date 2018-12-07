import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const Footer = ({ className = '', style = {}, children }) => (
  <footer className={`footer ${className}`} style={style}>
    {children}
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Footer;
