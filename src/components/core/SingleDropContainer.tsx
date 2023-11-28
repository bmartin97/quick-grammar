import DraggableItem from '../core/DraggableItem';
import { useEffect, useState } from 'react';
import { useDraggedElementContext } from '@/hooks/useDraggedElementContext';
import DropArea from './DropArea';
import { Item } from '@/interfaces';

interface SingleDropContainerProps {
  defaultItem: Item;
  onChange?: (newValue: Item) => void;
}

// Currently work only if the container is empty
function SingleDropContainer({
  defaultItem,
  onChange
}: SingleDropContainerProps) {
  const { draggedElement, setDraggedElement } = useDraggedElementContext();
  const [item, setItem] = useState<Item>(defaultItem);

  useEffect(() => {
    if (onChange) {
      onChange(item);
    }
  }, [item, onChange]);

  const updateContainer = () => {
    if (item) {
      return;
    }
    draggedElement.removeFromCurrentPosition();

    // insert the dropped element to the new position
    setItem(draggedElement as any as Item);
  };

  const renderItem = () => {
    const { component: Component, props } = item;

    return (
      <DraggableItem
        onDrag={(event) => {
          setDraggedElement({
            ...item,
            element: event.target,
            removeFromCurrentPosition: () => setItem(null)
          });
        }}>
        <Component {...props} />
      </DraggableItem>
    );
  };

  return (
    <DropArea fullWidth onDrop={updateContainer}>
      {item && renderItem()}
    </DropArea>
  );
}

export default SingleDropContainer;
