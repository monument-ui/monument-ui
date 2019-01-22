import styled from 'styled-components';

import { layers } from '../helpers/layers';

import { Perspective } from '../types/Perspective';

interface Props {
  perspective?: Perspective;
  color?: string;
  shadow?: string;
  colorify?: boolean;
}

export const Text: Props = styled.p`
  ${({
    perspective = { x: 5, y: 5 },
    color = '#ccc',
    shadow = '',
    colorify = false
  }) => `
    text-shadow: ${layers(
      perspective.x,
      perspective.y,
      color,
      shadow,
      colorify
    )};

    padding-${
      perspective.x > 0 ? `right: ${perspective.x}` : `left: ${-perspective.x}`
    }px;

    padding-${
      perspective.y > 0 ? `bottom: ${perspective.y}` : `top: ${-perspective.y}`
    }px;
  `}
`;
