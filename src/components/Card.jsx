import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import { CARD_COLORS } from './Helper';

function Card({ text, color }) {
  const classes = [styles.card, styles[color]];

  return <div className={classes.join(' ')}>{text}</div>;
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(CARD_COLORS)).isRequired
};

export default Card;
