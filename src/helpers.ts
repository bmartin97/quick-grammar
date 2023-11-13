import { Item } from './components/Box';
import Card from './components/Card';
import { CardProps } from './interfaces';

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

export function transformCardPropsToItems(cardProps: CardProps[]): Item[] {
  return cardProps.map(({ text, color }) => ({
    value: text,
    component: Card,
    props: { text, color }
  }));
}
