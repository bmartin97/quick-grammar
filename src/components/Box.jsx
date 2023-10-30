import { useContext } from 'react';
import { Context } from '../pages/App';

import styles from './Box.module.scss';
import DraggableItem from './DraggableItem';
import { useState } from 'react';
import DropArea from './DropArea';

function Box({ defaultItems, theme }) {
  const { draggedElement, setDraggedElement } = useContext(Context);
  const [items, setItems] = useState(defaultItems);

  const isNewItem = () => items.every((i) => i.value !== draggedElement.value);

  const handleOnDrop = (targetValue) => {
    let newItems = [...items];

    if (isNewItem()) {
      draggedElement.removeFromCurrentPosition();
    } else {
      // remove the droppedElement from the old position
      newItems = [...items.filter((x) => x.value !== draggedElement.value)];
    }

    // find the index of the target drop area
    const targetIndex = newItems.findIndex((x) => x.value === targetValue);

    // insert the dropped element to the new position
    setItems(newItems.toSpliced(targetIndex, 0, draggedElement));
  };

  const insertEndOfList = () => {
    let newItems = [...items];

    if (isNewItem()) {
      draggedElement.removeFromCurrentPosition();
    } else {
      // remove the droppedElement from the old position
      newItems = [...items.filter((x) => x.value !== draggedElement.value)];
    }

    // insert the dropped element to the new position
    setItems(newItems.toSpliced(items.length, 0, draggedElement));
  };

  return (
    <div className={[styles.box, styles[theme]].join(' ')}>
      {items.map((item) => {
        const { component: Component, props, value } = item;

        return (
          <DropArea onDrop={() => handleOnDrop(value)} key={value}>
            <DraggableItem
              onDrag={(event) => {
                setDraggedElement({
                  ...item,
                  element: event.target,
                  removeFromCurrentPosition: () =>
                    setItems(items.filter((i) => i.value !== item.value))
                });
              }}>
              <Component {...props} />
            </DraggableItem>
          </DropArea>
        );
      })}
      <DropArea fullWidth onDrop={() => insertEndOfList()} />
    </div>
  );
}

export default Box;
