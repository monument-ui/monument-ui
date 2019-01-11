import styled from 'styled-components';
import PropTypes from 'prop-types';

import input from './Input';

const Textarea = styled.textarea`
  width: 100%;
  min-height: 140px;

  ${input}

  resize: ${({ resize }) => resize};

  ${({ monument, perspective }) => {
    return monument
      ? import('../helpers/monument').then(style => style(perspective))
      : '';
  }}
`;

Textarea.propTypes = {
  resize: PropTypes.string,
  monument: PropTypes.bool,
  perspective: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

Textarea.defaultProps = {
  resize: 'none',
  monument: false,
  perspective: {
    x: 5,
    y: 5
  }
};

export default Textarea;
