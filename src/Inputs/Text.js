import styled from 'styled-components';
import PropTypes from 'prop-types';

import input from './Input';

const Text = styled.input`
  ${input}

  ${({ monument }) => {
    return monument ? import('../helpers/monument').then(style => style) : '';
  }}
`;

Text.propTypes = {
  monument: PropTypes.bool
};

Text.defaultProps = {
  monument: false
};

export default Text;
