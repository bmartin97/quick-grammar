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
