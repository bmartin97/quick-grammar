import { useRef, useContext } from 'react';
import { Context } from '../pages/App';

import styles from './DropArea.module.scss';
import DraggableItem from './DraggableItem';
import { Line } from './DraggableItem';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DROPAREA_THEMES } from './Helper';

function DropArea({ defaultItems, theme, taskId }) {
  const { draggedElement, setDraggedElement } = useContext(Context);
  const [items, setItems] = useState(defaultItems);
  const element = useRef();
  const classes = [styles.dropArea, styles[theme]];
  const nonDraggedElement = (item) => item.key !== draggedElement.key;
  const HOVER_STATE = {
    NONE: 'drag-hover-none',
    ITEM: 'drag-hover-item',
    AREA: 'drag-hover-area'
  };
  const [hover, setHover] = useState(HOVER_STATE.NONE);

  const isNewItem = () => element.current !== draggedElement.source;

  const handleOnDrop = (event) => {
    setHover(HOVER_STATE.NONE);
    if (event.target !== element.current) {
      return;
    }
    if (draggedElement.taskId != element.current.getAttribute('id')) return;

    if (isNewItem()) {
      draggedElement?.clean();
      setItems([...items, draggedElement]);
    } else {
      setItems([...items.filter(nonDraggedElement), draggedElement]);
    }
  };

  const handleItemDrop = (value) => {
    if (isNewItem() && draggedElement.taskId == taskId) {
      draggedElement?.clean();
    }
    if (value === draggedElement.value) {
      return;
    }
    const clearedItems = items.filter(nonDraggedElement);

    const targetIndex = clearedItems.findIndex((e) => e.value === value);
    if (draggedElement.taskId == taskId)
      setItems(clearedItems.toSpliced(targetIndex, 0, draggedElement));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    if (HOVER_STATE.NONE == hover) setHover(HOVER_STATE.AREA);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    if (hover == HOVER_STATE.AREA) setHover(HOVER_STATE.NONE);
  };

  const removeDraggedElement = () => {
    setItems([...items.filter(nonDraggedElement)]);
  };

  return (
    <div
      id={taskId}
      ref={element}
      className={classes.join(' ')}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}>
      {items.map((item, index) => {
        const { component: Component, props, value } = item;
        item.key = value + index;
        return (
          <DraggableItem
            key={value + index}
            onDrag={() =>
              setDraggedElement({
                ...item,
                clean: removeDraggedElement,
                source: element.current,
                taskId: taskId
              })
            }
            onDrop={() => handleItemDrop(value)}
            onDragOver={() => setHover(HOVER_STATE.ITEM)}
            onDragLeave={() => {
              if (hover == HOVER_STATE.ITEM) setHover(HOVER_STATE.NONE);
            }}>
            <Component {...props} />
          </DraggableItem>
        );
      })}
      {HOVER_STATE.AREA == hover && <Line />}
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
  theme: PropTypes.oneOf(Object.values(DROPAREA_THEMES)).isRequired,
  taskId: PropTypes.number.isRequired
};

export default DropArea;
