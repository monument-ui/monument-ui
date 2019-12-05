import { setColors } from './setColors';

import { Levels } from '../interfaces';

export const countLevels = ({ x, y, color, shadow, colorify }: Levels) => {
  const abs = (value: number) => Math.abs(value);

  const [master, slave] = abs(x) > abs(y) ? [x, y] : [y, x];

  const slaveDifference = abs(slave) / abs(master);

  const depth: string[] = [];

  let slaveDepth = 0;

  for (let masterDepth = 1; masterDepth <= abs(master); masterDepth++) {
    slaveDepth += slaveDifference;

    if (colorify) color = setColors(color, abs(master));

    let [horizontal, vertical] =
      abs(x) > abs(y) ? [masterDepth, slaveDepth] : [slaveDepth, masterDepth];

    depth.push(
      `${x > 0 ? horizontal : -horizontal}px ${
        y > 0 ? vertical : -vertical
      }px 0 ${color}`
    );
  }

  if (shadow) depth.push(shadow);

  return depth.join(',');
};
