import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.nav`
  top: 0;
  position: ${({ type }) =>
    (type === 'normal' && 'relative') ||
    (type === 'sticky' && 'sticky') ||
    (type === 'fixed' && 'fixed')};
`;

Nav.propTypes = {
  type: PropTypes.oneOf(['normal', 'sticky', 'fixed', 'vertical'])
};

Nav.defaultProps = {
  type: 'normal'
};

export default Nav;
