import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

const Table = ({ className = '', style = {}, children }) => (
  <table className={className} style={style}>
    {children}
  </table>
);

Table.propTypes = {
  className: PropTypes.string,
  style: PropTypes.node,
  children: PropTypes.node
};

export default Table;
