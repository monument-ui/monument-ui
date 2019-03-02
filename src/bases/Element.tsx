import styled from 'styled-components';

import Props from '../interfaces/Props';
import { Events } from '../types/Events';

export const Base: Props & Events = styled.div`
  will-change: transform;
  box-shadow: ${({ layers }) => layers};

  ${({ depth }) => `
    transform: translate(${-depth.x}px, ${-depth.y}px);
    
    margin-left: ${depth.x > 0 ? depth.x : -depth.x}px;
    margin-top: ${depth.y > 0 ? depth.y : -depth.y}px;
  `}

  ${({ animate }) =>
    animate ? `transition: transform 300ms ease, box-shadow 300ms ease;` : ``}

  ${({ clickable }) =>
    clickable
      ? `
      &:focus,
      &:active {
        transform: translate(0, 0);
        box-shadow: 0 0 0 0 #0000;
      }`
      : ``}
`;
