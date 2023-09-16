import styles from './DraggableItem.module.scss';

function DraggableItem({ text, style }) {
  return (
    <div className={`${styles.draggableItem} ${styles[style]}`} draggable>
      {text}
    </div>
  );
}

export default DraggableItem;
