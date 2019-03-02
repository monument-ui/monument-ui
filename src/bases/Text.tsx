import styled from 'styled-components';

import Props from '../interfaces/Props';

export const Base: Props = styled.p`
  text-shadow: ${({ layers }) => layers};

  ${({ depth }) => `
    margin-left: ${depth.x > 0 ? depth.x : -depth.x}px;
    margin-top: ${depth.y > 0 ? depth.y : -depth.y}px;
  `}
`;
