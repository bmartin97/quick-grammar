export const CARD_COLORS = {
  orange: 'orange',
  blue: 'blue',
  yellow: 'yellow',
  magenta: 'magenta',
  green: 'green'
};

export const DROPAREA_THEMES = {
  dashed: 'dashed',
  cartoon: 'cartoon'
};

export function getRandomElementOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
