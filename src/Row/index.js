import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  justify-items: ${({ align }) => align};
`;

Row.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end'])
};

Row.defaultProps = {
  align: 'start'
};

export default Row;
