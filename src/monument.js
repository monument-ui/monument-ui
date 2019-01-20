import { css } from 'styled-components';

const count = (x, y, color) => {
  let val = x > y ? x : y;

  if (x > Element.offsetWidth / 2) {
  }

  if (y > Element.offsetHeight / 2) {
  }

  const newValue = [];

  for (let i in val) {
    newValue.push(`${x / i}px ${y / i}px 0 0 ${color}`);
  }

  return newValue.join(' ');
};

const monument = css`
  ${({ perspective, color }) => `
    box-shadow: ${count(perspective.x, perspective.y, color)};
  `}

  ${({ hoverable }) =>
    hoverable &&
    `
  :hover {
    ${({ perspective, color }) => `
      box-shadow: ${count(perspective.x, perspective.y, color)}
    `}
  `}

  ${({ focusable }) =>
    focusable &&
    `
    :focus {
      box-shadow: 0, 0, 0, 0 rgba(0, 0, 0, 0);
      transform: translate(${perspective.x}px, ${perspective.y}px);
    }
  `}
`;

/*const props = {
  perspective: {
    x: 10,
    y: 10
  },
  color: '#fff',
  hoverable: 'up' || 'down' || 'reverseDir',
  focusable: 'up' || 'down' || 'reverseDir',
  onScroll:
    {
      mode: 'move' || 'roundAbout',
      speed: 100,
      direction: 'straight' || 'reverse'
    } || false
};*/

export default monument;
