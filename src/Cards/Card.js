import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className = '', monument = false, style = {}, children }) => (
  <article
    className={`card ${className} ${monument ? 'monument' : ''}`}
    style={style}
  >
    {children}
  </article>
);

Card.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.node,
  children: PropTypes.node
};

export default Card;
