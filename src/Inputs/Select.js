import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = styled.select`
  ${({ monument }) => {
    return monument ? import('../helpers/monument').then(style => style) : '';
  }}
`;

Select.propTypes = {
  monument: PropTypes.bool
};

export default Select;
