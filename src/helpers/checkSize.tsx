export const checkSize = (value: number): boolean => {
  if (value >= 0 && value < 128) return true;
  else if (value >= 128 && value <= 255) return false;
};
