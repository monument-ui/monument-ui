import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Base = styled.figure`
  position: relative;
  width: 100%;
`;

const Image = ({ style, src, alt, ...props }) => (
  <Base style={style}>
    <img src={src} alt={alt} {...props} />
  </Base>
);

Image.propTypes = {
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Image.defaultProps = {
  alt: ''
};

export default Image;
