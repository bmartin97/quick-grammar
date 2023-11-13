export const CARD_COLORS = {
  orange: 'orange',
  blue: 'blue',
  yellow: 'yellow',
  magenta: 'magenta',
  green: 'green'
};

export function getRandomElementOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
