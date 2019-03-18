import Color from 'color';

export const generateColors = (color: string): string => {
  return Color(color).isDark()
    ? Color(color)
        .lighten(1 / 128)
        .toString()
    : Color(color)
        .darken(1 / 128)
        .toString();
};
