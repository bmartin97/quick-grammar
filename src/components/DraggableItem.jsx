import styles from './DraggableItem.module.scss';

function DraggableItem({ text, color }) {
  return (
    <div className={`${styles.draggableItem} ${styles[color]}`} draggable>
      {text}
    </div>
  );
}

export default DraggableItem;
