import { CardColor, CardProps } from '@/interfaces';
import styles from './styles/Card.module.scss';

function Card({ text, color }: CardProps) {
  const classes = [styles.card, styles[CardColor[color]]];

  return <div className={classes.join(' ')}>{text}</div>;
}

export default Card;
