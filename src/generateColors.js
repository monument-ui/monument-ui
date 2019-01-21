import hexToRgba from 'hex-to-rgba';

export const generateColors = color => {
  if (!color.includes('rgb')) color = hexToRgba(color);

  const list = color.replace(/[rgba() ]/g, '').split(',');

  for (let i = 0; i < 3; i++) {
    list[i] =
      parseInt(list[i]) > 0 && parseInt(list[i]) < 128
        ? parseInt(list[i]) + 1
        : parseInt(list[i]) >= 128 &&
          parseInt(list[i]) <= 255 &&
          parseInt(list[i]) - 1;
  }

  color = `rgba(${list})`;

  return color;
};
