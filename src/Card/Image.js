import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className = '', style = {}, src, alt = '' }) => (
  <figure className={`card-image ${className}`} style={style}>
    <img src={src} alt={alt} />
  </figure>
);

Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Image;
