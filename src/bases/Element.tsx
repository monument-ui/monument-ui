import styled from 'styled-components';

const onClick = `
  transform: translate(0, 0);
  box-shadow: 0 0 0 0 #0000;
`;

export const Base = styled.div`
  will-change: transform;
  box-shadow: ${({ layers }: { layers: string }) => layers};

  ${({ depth: { x, y } }: any) => `
    transform: translate(${-x}px, ${-y}px);
  `}

  ${({ animate }: { animate: boolean }) =>
    animate ? `transition: transform 300ms ease, box-shadow 300ms ease;` : ``}

  ${({ clickable }: { clickable: boolean }) =>
    clickable
      ? `
      &:focus,
      &:active {
        ${onClick}
      }

      @media not all and (hover: hover) {
        &:hover {
          ${onClick}
        }
      }
      `
      : ``}
`;
