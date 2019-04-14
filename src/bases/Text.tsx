import styled from 'styled-components';

import { Depth } from '../types';

type Props = {
  layers: string;
  depth: Depth;
};

export const Base = styled.p<Props>`
  ${({ layers, depth }) => `
    text-shadow: ${layers};
    margin-left: ${-depth.x}px;
    margin-top: ${-depth.y}px;
  `}
`;
