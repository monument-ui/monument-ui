import styled from 'styled-components';

import { ElementBase } from '../interfaces';

import { Actions } from '../enums';

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

    ${
      clickable === Actions.Push
        ? `
      &:focus,
      &:active {
        ${pushed}
      }
    `
        : ``
    }
    
    ${
      hoverable === Actions.Push
        ? `
      &:not(:focus):hover,
      &:not(:active):hover {
        ${pushed}
      }
    `
        : ``
    }

    ${
      touchable === Actions.Push
        ? `
      &:hover {
        ${pushed}
      }
    `
        : ``
    }
 `}
`;
