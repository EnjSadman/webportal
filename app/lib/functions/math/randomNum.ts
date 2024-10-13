export function randomNum(min : number, max : number) {
  return Math.random() * (max - min) + min;
}