import styled from 'styled-components';

export const Base = styled.p`
  text-shadow: ${({ layers }: { layers: string }) => layers};

  ${({ depth: { x, y } }: any) => `
    margin-left: ${x > 0 ? x : -x}px;
    margin-top: ${y > 0 ? y : -y}px;
  `}
`;
