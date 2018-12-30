import styled from 'styled-components';
import PropTypes from 'prop-types';

const Col = styled.section`
  @media screen and (max-width: 768px) {
    grid-column: span ${({ sm, md, lg, xl }) => sm || md || lg || xl || 12};
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    grid-column: span ${({ sm, md, lg, xl }) => md || sm || lg || xl || 12};
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    grid-column: span ${({ sm, md, lg, xl }) => lg || md || xl || sm || 12};
  }

  @media screen and (min-width: 1200px) {
    grid-column: span ${({ sm, md, lg, xl }) => xl || lg || md || sm || 12};
  }
`;

Col.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
};

export default Col;
