import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './Dropdown.scss';

const Dropdown = ({
  className = '',
  monument = false,
  style = {},
  onClick,
  items,
  label = 'Toggle',
  children
}) => (
  <div
    className={`button ${className} ${monument ? 'monument' : ''}`}
    style={style}
    onClick={onClick}
  >
    {!children && <Button onClick={null}>{label}</Button>}

    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  items: PropTypes.array,
  label: PropTypes.string,
  children: PropTypes.node
};

export default Dropdown;
