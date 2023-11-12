import styles from './Card.module.scss';

type CardColor = 'orange' | 'blue' | 'yellow' | 'magenta' | 'green';

interface Props {
  text: string;
  color: CardColor;
}

function Card({ text, color }: Props) {
  const classes = [styles.card, styles[color]];

  return <div className={classes.join(' ')}>{text}</div>;
}

export default Card;
