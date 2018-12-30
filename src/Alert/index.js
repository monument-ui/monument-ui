import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../helpers';

const { deepPurple, blueGrey, blue, green, orange, red, white, black } = colors;

const Base = styled.div`
  padding: 10px 12px;
  margin: 6px 10px;
  border-radius: 4px;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ type }) =>
    (type === 'primary' && `background-color: ${deepPurple.light[1]}`) ||
    (type === 'secondary' && `background-color: ${blueGrey.light[2]}`) ||
    (type === 'info' && `background-color: ${blue.default}`) ||
    (type === 'success' && `background-color: ${green.default}`) ||
    (type === 'warning' && `background-color: ${orange.dark[0]}`) ||
    (type === 'error' && `background-color: ${red.dark[1]}`) ||
    (type === 'light' && `background-color: ${white}`) ||
    (type === 'dark' && `background-color: ${black}`)}

  span {
    font-weight: 500;
  }
`;

const Alert = ({ type, title, info, children, ...props }) => (
  <Base type={type} {...props}>
    <div>
      <span>{title}</span>: {info}
    </div>

    <div>{children}</div>
  </Base>
);

Alert.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark'
  ]),
  title: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node
};

Alert.defaultProps = {
  type: 'info'
};

export default Alert;
