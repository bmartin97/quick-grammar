export enum CardColor {
  'orange',
  'blue',
  'yellow',
  'magenta',
  'green'
}
export interface CardProps {
  text: string;
  color: CardColor;
}

export interface Item {
  value: string;
  component: (...args) => JSX.Element;
  props: Record<string, any>;
}
