import styled from 'styled-components';

import { Depth } from '../types';

const onClick = `
  transform: translate(0, 0);
  box-shadow: 0 0 0 0 #0000;
`;

type Props = {
  layers: string;
  depth: Depth;
  animate: boolean;
  clickable: boolean;
};

export const Base = styled.div<Props>`
  ${({ depth, layers, animate, clickable }) => `
    will-change: transform;
    box-shadow: ${layers};
    transform: translate(${-depth.x}px, ${-depth.y}px);
    
    ${animate ? `transition: transform 300ms ease, box-shadow 300ms ease;` : ``}
    
    ${
      clickable
        ? `
    &:focus,
    &:active {
      ${onClick}
    }

    @media not all and (hover: hover) {
      &:hover {
        ${onClick}
      }
    }`
        : ``
    }
 `}
`;
