import styled from 'styled-components';

export const Base = styled.p`
  text-shadow: ${({ layers }: { layers: string }) => layers};


  ${({ depth }) => `
    margin-left: ${depth.x > 0 ? depth.x : -depth.x}px;
    margin-top: ${depth.y > 0 ? depth.y : -depth.y}px;
  `}
`;
