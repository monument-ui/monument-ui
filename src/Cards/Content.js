import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ className = '', style = {}, children }) => (
  <div className={`card-content ${className}`} style={style}>
    {children}
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  style: PropTypes.node,
  children: PropTypes.node
};

export default Content;
