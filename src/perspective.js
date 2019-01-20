export const count = (x, y, color) => {
  /*if (x > Element.offsetWidth / 2) x = Element.offsetWidth / 2;
  if (y > Element.offsetHeight / 2) y = Element.offsetHeight / 2;*/

  let horizontal, vertical;

  if (Math.abs(x) >= Math.abs(y)) {
    horizontal = x;
    vertical = y;
  } else {
    horizontal = y;
    vertical = x;
  }

  let newValue = [];

  let j = Math.abs(vertical) / Math.abs(horizontal);
  let k = 0;

  for (let i = 1; i <= Math.abs(horizontal); i++) {
    k += j;

    let horiz = Math.abs(x) > Math.abs(y) ? i : k;
    let vert = Math.abs(x) < Math.abs(y) ? i : k;

    newValue = [
      ...newValue,
      `${x > 0 ? horiz : -horiz}px ${y > 0 ? vert : -vert}px 0 ${color}`
    ];
  }

  return newValue.join(',');
};
