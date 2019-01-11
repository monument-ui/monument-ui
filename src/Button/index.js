import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  font-weight: 500;
  cursor: pointer;
  border-radius: ${({ circle }) => (circle ? '999px' : '4px')};
  border: 0;
  display: inline-block;

  ${({ size }) =>
    (size === 'xl' &&
      `
      font-size: 28px;
      padding: 12px 30px;`) ||
    (size === 'lg' &&
      `
      font-size: 24px;
      padding: 10px 26px;`) ||
    (size === 'md' &&
      `
      font-size: 20px;
      padding: 8px 20px;`) ||
    (size === 'sm' &&
      `
      font-size: 16px;
      padding: 6px 14px;`) ||
    (size === 'xs' &&
      `
      font-size: 14px;
      padding: 4px 10px;`)}

  :not(:disabled) {
    ${({ monument, perspective }) => {
      return monument
        ? import('../helpers/monument').then(style => style(perspective))
        : '';
    }}
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  circle: PropTypes.bool,
  monument: PropTypes.bool,
  perspective: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

Button.defaultProps = {
  size: 'md',
  circle: false,
  monument: false,
  perspective: {
    x: 5,
    y: 5
  }
};

export default Button;
