import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.main`
  margin: 0 auto;
  max-width: ${({ maxWidth, fluid }) => (fluid ? 100 : maxWidth)}em;
`;

Container.propTypes = {
  maxWidth: PropTypes.number,
  fluid: PropTypes.bool
};

Container.defaultProps = {
  maxWidth: 72,
  fluid: false
};

export default Container;
