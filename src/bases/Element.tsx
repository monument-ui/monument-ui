import styled from 'styled-components';

import { ElementBase } from '../interfaces';

const pushed = `
  transform: translate3d(0, 0, 0);
  box-shadow: 0 0 0 0 #0000;
`;
export const Base = styled.div<ElementBase>`
  ${({ depth, layers, animate, clickable, hoverable, touchable }) => `
    transform: translate3d(${-depth.x}px, ${-depth.y}px, 0);
    will-change: transform;
    box-shadow: ${layers};
    
  ${animate && `transition: transform 300ms ease, box-shadow 300ms ease;`}

    ${clickable === 'push' &&
      `
      &:focus,
      &:active {
        ${pushed}
      }
    `}

    ${hoverable === 'push' &&
      `
      &:hover:not(:focus) {
        ${pushed}
      }
    `}

    ${touchable === 'push' &&
      `
      &:hover {
        ${pushed}
      }
    `}
 `}
`;
