import styled from 'styled-components';

import { Perspective } from '../types/Perspective';

import { layers } from '../helpers/layers';

interface Props {
  readonly perspective?: Perspective;
  readonly color?: string;
  readonly shadow?: string;
  readonly colorify?: boolean;
  readonly hoverable?: boolean;
  readonly clickable?: boolean;
}

export const Element: Props = styled.div`
  ${({
    perspective = { x: 5, y: 5 },
    color = '#444',
    shadow = '',
    colorify = false,
    hoverable = false,
    clickable = false
  }) => `
    transition: all 300ms ease;

    &:not(:focus):not(:active) {
      box-shadow: ${layers(
        perspective.x,
        perspective.y,
        color,
        shadow,
        colorify
      )};
    }

    ${hoverable &&
      `
      &:hover {
        cursor: pointer;
      }

      &:not(:active):hover {
        box-shadow: ${layers(
          perspective.x > 0 ? perspective.x + 6 : perspective.x - 6,
          perspective.y > 0 ? perspective.y + 6 : perspective.y - 6,
          color,
          shadow,
          colorify
        )};

        transform: translate(${perspective.x > 0 ? -6 : 6}px, ${
        perspective.y > 0 ? -6 : 6
      }px);
      }
    `}

    ${clickable &&
      `
      &:focus,
      &:active {
        box-shadow: 0, 0, 0 rgba(0, 0, 0, 0);
        transform: translate(${perspective.x}px, ${perspective.y}px);
      }
    `}
  `}
`;
