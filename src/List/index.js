import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  display: flex;

  ${({ horizontal }) =>
    horizontal &&
    `
    overflow-x: auto;
    flex-wrap: nowrap;
  `}
`;

List.propTypes = {
  horizontal: PropTypes.bool
};

List.defaultProps = {
  horizontal: false
};

export default List;
