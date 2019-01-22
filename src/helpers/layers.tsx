import { generateColors } from './generateColors';

interface Params {
  readonly x: number;
  readonly y: number;
  color: string;
  readonly shadow?: string;
  readonly colorify?: boolean;
}

export const layers: Params | any = (x, y, color, shadow, colorify): string => {
  let master: number, slave: number;

  if (Math.abs(x) >= Math.abs(y)) {
    master = x;
    slave = y;
  } else {
    master = y;
    slave = x;
  }

  const slaveDifference: number = Math.abs(slave) / Math.abs(master);

  let depth: string[] = [];
  let slaveDepth: number = 0;

  for (let masterDepth = 1; masterDepth <= Math.abs(master); masterDepth++) {
    slaveDepth += slaveDifference;

    if (colorify) color = generateColors(color);

    let horizontal = Math.abs(x) > Math.abs(y) ? masterDepth : slaveDepth;
    let vertical = Math.abs(x) < Math.abs(y) ? masterDepth : slaveDepth;

    depth = [
      ...depth,
      `${x > 0 ? horizontal : -horizontal}px ${
        y > 0 ? vertical : -vertical
      }px 0 ${color}`
    ];
  }

  if (shadow) depth = [...depth, `${shadow}`];

  return depth.join(',');
};
