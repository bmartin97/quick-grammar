import styles from './Card.module.scss';

function Card({ text, color }) {
  const classes = [styles.card, styles[color]];

  return <div className={classes.join(' ')}>{text}</div>;
}

export default Card;
