import styles from './DraggableItem.module.scss';

function DraggableItem({ text, color, onDrag }) {
  const handleDrag = (event) => {
    onDrag(event);
  };

  return (
    <div
      className={`${styles.draggableItem} ${styles[color]}`}
      draggable
      onDrag={handleDrag}>
      {text}
    </div>
  );
}

export default DraggableItem;
