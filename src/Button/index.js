import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];

const Button = ({
  submit,
  className = '',
  monument = false,
  circle = false,
  size,
  style = {},
  onClick,
  children
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={`button ${className}  ${monument ? 'monument' : ''} ${
      circle ? 'circle' : ''
    } ${sizes.includes(size) ? size : 'md'}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  submit: PropTypes.bool,
  className: PropTypes.string,
  monument: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
