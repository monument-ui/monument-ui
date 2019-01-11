import { css } from 'styled-components';

const monument = css`
  ${({ perspective }) => perspective.x + perspective.y}

  :hover {
  }

  :focus {
  }
`;

export default monument;
