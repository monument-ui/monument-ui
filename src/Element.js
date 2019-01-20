import styled from 'styled-components';

import { layers } from './layers';

export const Element = styled.div`
  ${({
    perspective = { x: 5, y: 5 },
    color = '#444',
    hoverable = true,
    focusable = true
  }) => `
    transition: all 300ms ease;

    &:not(:focus):not(:active) {
      box-shadow: ${layers(perspective.x, perspective.y, color)};
    }

    ${hoverable &&
      `
      &:hover {
        cursor: pointer;
      }
    `}

    ${focusable &&
      `
      &:focus,
      &:active {
        box-shadow: 0, 0, 0 rgba(0, 0, 0, 0);
        transform: translate(${perspective.x}px, ${perspective.y}px);
      }
    `}
  `}
`;

/*&:not(:active):hover {
  box-shadow: ${layers(
    perspective.x > 0 ? perspective.x + 2 : perspective.x - 2,
    perspective.y > 0 ? perspective.y + 2 : perspective.y - 2,
    color
  )};
  transform: translate(${perspective.x > 0 ? -2 : 2}px, ${
  perspective.y > 0 ? -2 : 2
}px);
}*/

/*{
  hoverable: 'up' || 'down' || 'reverseDir',
  focusable: 'up' || 'down' || 'reverseDir',
  onScroll:
    {
      mode: 'move' || 'roundAbout',
      speed: 100,
      direction: 'straight' || 'reverse'
    } || false
}*/
