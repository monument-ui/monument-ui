import styled from 'styled-components';

import Props from '../interfaces/Props';
import { Events } from '../types/Events';

export const Base: Props & Events = styled.div`
  will-change: transform;
  box-shadow: ${({ layers }) => layers};

  ${({ animate }) => (animate ? `transition: all 300ms ease` : ``)};

  ${({ depth }) => `
    transform: translate(${depth.x}px, ${depth.y}px);
    
    margin-${depth.x > 0 ? `right: ${depth.x}` : `left: ${depth.x}`}px;
    margin-${depth.y > 0 ? `bottom: ${depth.y}` : `top: ${depth.y}`}px;
  `}
`;
