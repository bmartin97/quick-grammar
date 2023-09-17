import PropTypes from 'prop-types';
import styles from './DropArea.module.scss';

function DropArea({ children, onDrop, color }) {
  const onDragOver = (event) => {
    event.preventDefault();
  };

  const handleOnDrop = (event) => {
    onDrop(event);
  };

  return (
    <div
      className={`${styles.dropArea} ${styles[color]}`}
      onDragOver={(event) => onDragOver(event)}
      onDrop={handleOnDrop}>
      {children}
    </div>
  );
}

DropArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onDrop: PropTypes.func,
  color: PropTypes.string
};

export default DropArea;
