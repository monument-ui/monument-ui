import React from 'react';
import PropTypes from 'prop-types';

const types = ['vertical', 'horizontal', 'inline'];

const Form = ({
  style = {},
  className = '',
  method,
  action,
  type = 'vertical',
  children
}) => (
  <form
    className={`${className} ${types.includes(type) ? type : 'vertical'}`}
    style={style}
    method={method}
    action={action}
  >
    {children}
  </form>
);

Form.propTypes = {
  className: PropTypes.string,
  style: PropTypes.node,
  method: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node
};

export default Form;
