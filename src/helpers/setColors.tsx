import Color from 'color';

export const setColors = (color: string, levels: number) => {
  return Color(color).isDark()
    ? Color(color)
        .lighten(1 / (levels * 5))
        .toString()
    : Color(color)
        .darken(1 / (levels * 5))
        .toString();
};
