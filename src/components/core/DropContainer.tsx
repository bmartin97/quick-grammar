import DraggableItem from '../core/DraggableItem';
import { useEffect, useState } from 'react';
import { useDraggedElementContext } from '@/hooks/useDraggedElementContext';
import DropArea from './DropArea';
import { Item } from '@/interfaces';

interface DropContainerProps {
  defaultItems: Item[];
  onChange?: (newValue: Item[]) => void;
}

function DropContainer({ defaultItems, onChange }: DropContainerProps) {
  const { draggedElement, setDraggedElement } = useDraggedElementContext();
  const [items, setItems] = useState<Item[]>(defaultItems);

  useEffect(() => {
    if (onChange) {
      onChange(items);
    }
  }, [items, onChange]);

  const isNewItem = () => items.every((i) => i.value !== draggedElement.value);

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
          <DropArea onDrop={insertEndOfList} key={value}>
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
      <DropArea fullWidth onDrop={insertEndOfList} />
    </>
  );
}

export default DropContainer;
