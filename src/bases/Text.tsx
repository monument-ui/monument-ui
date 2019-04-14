import styled from 'styled-components';

export const Base = styled.p`
  text-shadow: ${({ layers }: { layers: string }) => layers};

  ${({ depth: { x, y } }: any) => `
    margin-left: ${-x}px;
    margin-top: ${-y}px;
  `}
`;
