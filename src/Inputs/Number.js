import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';
import Text from './Text';

const Base = styled.div``;

const Input = styled(Text)`
  -moz-appearance: textfield;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Number = ({ monument, ...props }) => {
  const ref = React.createRef();

  return (
    <Base>
      <Button
        style={{ padding: 0 }}
        monument={monument}
        onClick={() => ref.current.stepDown()}
        value="-"
      />

      <Input type="number" ref={ref} {...props} />

      <Button
        style={{ padding: 0 }}
        monument={monument}
        onClick={() => ref.current.stepUp()}
        value="+"
      />
    </Base>
  );
};

Number.propTypes = {
  monument: PropTypes.bool
};

Number.defaultProps = {
  monument: false
};

export default Number;
