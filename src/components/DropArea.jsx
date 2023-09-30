import { useRef } from 'react';
import styles from './DropArea.module.scss';
import DraggableItem from './DraggableItem';
import { useState } from 'react';
import PropTypes from 'prop-types';

function DropArea({ defaultItems, setDraggedElement, draggedElement, to }) {
  const [items, setItems] = useState(defaultItems);
  const element = useRef();
  const classes = [
    styles.dropArea,
    to ? styles.dropAreaTo : styles.dropAreaFrom
  ];
  const nonDraggedElement = (item) => item.value !== draggedElement.value;

  const isNewItem = () => element.current !== draggedElement.source;

  const handleOnDrop = (event) => {
    if (event.target !== element.current) {
      return;
    }

    if (isNewItem()) {
      draggedElement?.clean();
      setItems([...items, draggedElement]);
    } else {
      setItems([...items.filter(nonDraggedElement), draggedElement]);
    }
  };

  const handleItemDrop = (value) => {
    if (isNewItem()) {
      draggedElement?.clean();
    }
    if (value === draggedElement.value) {
      return;
    }

    const clearedItems = items.filter(nonDraggedElement);

    const targetIndex = clearedItems.findIndex((e) => e.value === value);

    setItems(clearedItems.toSpliced(targetIndex, 0, draggedElement));
  };

  const removeDraggedElement = () => {
    setItems([...items.filter(nonDraggedElement)]);
  };

  return (
    <div
      ref={element}
      className={classes.join(' ')}
      onDrop={handleOnDrop}
      onDragOver={(event) => {
        event.preventDefault();
      }}>
      {items.map((item, index) => {
        const { component: Component, props, value } = item;

        return (
          <DraggableItem
            key={value + index}
            onDrag={() =>
              setDraggedElement({
                ...item,
                clean: removeDraggedElement,
                source: element.current
              })
            }
            onDrop={() => handleItemDrop(value)}>
            <Component {...props} />
          </DraggableItem>
        );
      })}
    </div>
  );
}

DropArea.propTypes = {
  defaultItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      component: PropTypes.elementType,
      props: PropTypes.object
    })
  ).isRequired,
  setDraggedElement: PropTypes.func.isRequired,
  draggedElement: PropTypes.shape({
    value: PropTypes.string,
    component: PropTypes.elementType,
    props: PropTypes.object,
    clean: PropTypes.func,
    source: PropTypes.object
  }),
  to: PropTypes.bool
};

export default DropArea;
