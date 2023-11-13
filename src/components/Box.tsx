import styles from './styles/Box.module.scss';
import DraggableItem from './DraggableItem';
import { useEffect, useState } from 'react';
import DropArea from './DropArea';
import { useDraggedElementContext } from '@/hooks/useDraggedElementContext';

export interface Item {
  value: string;
  component: (...args) => JSX.Element;
  props: Record<string, any>;
}

interface Props {
  defaultItems: Item[];
  onUpdate?: (items: Item[]) => void;
  theme: 'dashed' | 'cartoon';
}

function Box({ defaultItems, theme, onUpdate }: Props) {
  const { draggedElement, setDraggedElement } = useDraggedElementContext();
  const [items, setItems] = useState<Item[]>(defaultItems);

  useEffect(() => {
    if (!onUpdate) return;

    onUpdate(items);
  }, [items, onUpdate]);

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
