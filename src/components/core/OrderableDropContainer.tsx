import DraggableItem from '../core/DraggableItem';
import { useState } from 'react';
import { useDraggedElementContext } from '@/hooks/useDraggedElementContext';
import DropAreaWithIndicator from '../core/DropAreaWithIndicator';
import { Item } from '@/interfaces';

function OrderableDropContainer({ defaultItems }) {
  const { draggedElement, setDraggedElement } = useDraggedElementContext();
  const [items, setItems] = useState<Item[]>(defaultItems);

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
    // @ts-expect-error  TODO: replace with splice
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
    // @ts-expect-error   TODO: replace with splice
    setItems(newItems.toSpliced(items.length, 0, draggedElement));
  };

  return (
    <>
      {items.map((item) => {
        const { component: Component, props, value } = item;

        return (
          <DropAreaWithIndicator onDrop={() => handleOnDrop(value)} key={value}>
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
          </DropAreaWithIndicator>
        );
      })}
      <DropAreaWithIndicator fullWidth onDrop={insertEndOfList} />
    </>
  );
}

export default OrderableDropContainer;
