import React from 'react';
import PropTypes from 'prop-types';

import './Alert.scss';

const types = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

const Alert = ({ className = '', style = {}, type, title, info, children }) => (
  <div
    className={`alert ${types.includes(type) ? type : 'info'} ${className}`}
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
  style: PropTypes.node,
  type: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node
};

export default Alert;
