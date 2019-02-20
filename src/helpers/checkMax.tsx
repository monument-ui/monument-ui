export function checkMax<T extends { x: number; y: number }>(
  max: T,
  perspective: T
): T {
  if (perspective.x > max.x) perspective.x = max.x;
  if (perspective.y > max.y) perspective.y = max.y;

  return perspective;
}
