import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

export default function Number({
  className = '',
  monument = false,
  style = {},
  onChange,
  name,
  value,
  disabled,
  readonly,
  required,
  min,
  max,
  step
}) {
  const ref = React.createRef();

  return (
    <div className="input-number">
      <Button
        className="input-number-down"
        style={{ padding: 0 }}
        monument={monument}
        onClick={() => ref.current.stepDown()}
      >
        -
      </Button>

      <input
        type="number"
        ref={ref}
        className={`input input-number-value ${className} ${
          monument ? 'monument' : ''
        }`}
        style={style}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        min={min}
        max={max}
        step={step}
      />

      <Button
        className="input-number-up"
        style={{ padding: 0 }}
        monument={monument}
        onClick={() => ref.current.stepUp()}
      >
        +
      </Button>
    </div>
  );
}

Number.propTypes = {
  className: PropTypes.string,
  monument: PropTypes.bool,
  style: PropTypes.node,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};
