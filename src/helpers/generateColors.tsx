import RGBColor from 'rgbcolor';

import { checkSize } from './checkSize';

export const generateColors = (color: string): string => {
  const convert = new RGBColor(color);

  return `rgba(${checkSize(convert.r) ? convert.r + 1 : convert.r - 1}, ${
    checkSize(convert.g) ? convert.g + 1 : convert.g - 1
  }, ${checkSize(convert.b) ? convert.b + 1 : convert.b - 1}, ${
    convert.alpha
  })`;
};
