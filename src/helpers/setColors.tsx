import Color from 'color';

export const setColors = (item: string, levels: number) => {
  const color = Color(item);

  return color[color.isDark() ? 'lighten' : 'darken'](
    1 / (levels * 5)
  ).toString();
};
