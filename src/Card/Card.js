import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.article`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;

  ${({ monument }) => {
    return monument ? import('../helpers/monument').then(style => style) : '';
  }}
`;

Card.propTypes = {
  monument: PropTypes.bool
};

Card.defaultProps = {
  monument: false
};

export default Card;
