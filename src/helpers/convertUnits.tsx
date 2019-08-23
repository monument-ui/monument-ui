import toPX from 'to-px';

export function convertUnits(unit: number | string) {
  return Math.round(typeof unit === 'string' ? toPX(unit) : unit);
}
