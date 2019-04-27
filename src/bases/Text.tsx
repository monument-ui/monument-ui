import styled from 'styled-components';

import { TextBase } from '../interfaces';

export const Base = styled.p<TextBase>`
  ${({ depth, layers }) => `
    transform: translate3d(${-depth.x / 2}px, ${-depth.y / 2}px, 0);
    text-shadow: ${layers};
  `}
`;
