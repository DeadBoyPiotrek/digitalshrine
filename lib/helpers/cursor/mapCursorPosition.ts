export const mapCursorPositionX = (cursorPositionX: number) => {
  const rangeX = window.innerWidth;
  const mappedX = (cursorPositionX / rangeX) * 2 - 1 - 0.3;
  return mappedX * 0.7;
};
export const mapCursorPositionY = (cursorPositionY: number) => {
  const rangeY = window.innerHeight;
  const mappedY = (cursorPositionY / rangeY) * 2 - 1;
  return mappedY * 0.5;
};
