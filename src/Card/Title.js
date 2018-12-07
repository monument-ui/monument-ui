import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ className = '', style = {}, link, children }) => (
  <h3 className={`card-title ${className}`} style={style}>
    {link ? <a href={link}>{children}</a> : children}
  </h3>
);

Title.propTypes = {
  className: PropTypes.string,
  style: PropTypes.node,
  link: PropTypes.string,
  children: PropTypes.node
};

export default Title;
