import styled from 'styled-components';

import { layers } from './layers';

export const Text = styled.p`
  ${({
    perspective = { x: 5, y: 5 },
    color = '#ccc',
    shadow = '10px 10px 20px #0005',
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
