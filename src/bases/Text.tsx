import styled from 'styled-components';

import Props from '../interfaces/Props';

export const Base: Props = styled.p`
  text-shadow: ${({ layers }) => layers};

  ${({ depth }) => `
    padding-${depth.x > 0 ? `right: ${depth.x}` : `left: ${depth.x}`}px;
    padding-${depth.y > 0 ? `bottom: ${depth.y}` : `top: ${depth.y}`}px;
  `}
`;
