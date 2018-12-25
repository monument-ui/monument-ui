import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Box from '../Box';

const bounce = keyframes`
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
`;

const Base = styled(Box)`
  position: relative;
  margin: 100px auto;

  ${({ size }) =>
    (size === 'xl' &&
      `
      width: 85px;
      height: 85px;`) ||
    (size === 'lg' &&
      `
      width: 70px;
      height: 70px;`) ||
    (size === 'md' &&
      `  
      width: 55px;
      height: 55px;`) ||
    (size === 'sm' &&
      `
      width: 40px;
      height: 40px;`) ||
    (size === 'xs' &&
      `
      width: 25px;
      height: 25px;`)}
`;

const Inner = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ color }) => color};
  animation: ${bounce} 1.4s infinite ease-in-out
    ${({ delay }) => (delay ? '-0.7s' : '')};
`;

const Loader = ({ size, color, ...props }) => (
  <Base size={size} {...props}>
    <Inner color={color} />
    <Inner color={color} delay />
  </Base>
);

Loader.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs'])
};

Loader.defaultProps = {
  size: 'md',
  color: ''
};

export default Loader;
