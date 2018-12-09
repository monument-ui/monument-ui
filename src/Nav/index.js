import React from 'react';
import PropTypes from 'prop-types';

import './Nav.scss';

const types = ['normal', 'sticky', 'fixed', 'vertical'];

const Nav = ({ className = '', type, style = {}, children }) => (
  <nav
    className={`nav ${className} ${types.includes(type) ? type : 'normal'}`}
    style={style}
  >
    {children}
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

export default Nav;
