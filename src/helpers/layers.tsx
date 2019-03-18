import { generateColors } from './generateColors';

import LayerParams from '../interfaces/LayerParams';

export function countLayers({
  x,
  y,
  color,
  shadow,
  colorify
}: LayerParams): string {
  let master: number;
  let slave: number;

  if (Math.abs(x) >= Math.abs(y)) {
    master = x;
    slave = y;
  } else {
    master = y;
    slave = x;
  }

  const slaveDiff: number = Math.abs(slave) / Math.abs(master);

  let depth: string[] = [];
  let slaveDepth: number = 0;

  for (let masterDepth = 1; masterDepth <= Math.abs(master); masterDepth++) {
    slaveDepth += slaveDiff;

    if (colorify) color = generateColors(color);

    let horizontal = Math.abs(x) > Math.abs(y) ? masterDepth : slaveDepth;
    let vertical = Math.abs(x) < Math.abs(y) ? masterDepth : slaveDepth;

    depth.push(
      `${x > 0 ? horizontal : -horizontal}px ${
        y > 0 ? vertical : -vertical
      }px 0 ${color}`
    );
  }

  if (shadow) depth = [...depth, `${shadow}`];

  return depth.join(',');
}
