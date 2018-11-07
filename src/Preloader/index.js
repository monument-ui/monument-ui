import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.scss';

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];

const Preloader = ({ className = 'red', size }) => (
  <div className={`preloader ${sizes.includes(size) ? size : 'md'}`}>
    <div className={`preloader__bounce--1 ${className}`} />
    <div className={`preloader__bounce--2 ${className}`} />
  </div>
);

Preloader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

export default Preloader;
