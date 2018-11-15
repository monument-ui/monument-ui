import React from 'react';
import PropTypes from 'prop-types';

import './Alert.scss';

const types = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

const Alert = ({ className = '', type, style = {}, title, info, children }) => (
  <div
    className={`alert ${className} ${types.includes(type) ? type : 'info'}`}
    style={style}
  >
    <div>
      <span className="bold">{title}</span>: {info}
    </div>

    <div>{children}</div>
  </div>
);

Alert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.node,
  title: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node
};

export default Alert;
