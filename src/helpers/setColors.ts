import Color from 'color';

export const setColors = (item: string, levels: number) => {
  const color = Color(item);

  console.log({ levels });

  console.log(1 / (levels * 5));

  console.log(
    color[color.isDark() ? 'lighten' : 'darken'](1 / (levels * 5)).toString()
  );

  return color[color.isDark() ? 'lighten' : 'darken'](
    1 / (levels * 5)
  ).toString();
};
