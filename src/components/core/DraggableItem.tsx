import { DragEventHandler, ReactNode } from 'react';

interface DraggableItemProps {
  onDrag: DragEventHandler;
  children?: ReactNode;
}

function DraggableItem({ onDrag, children }: DraggableItemProps) {
  return (
    <div draggable onDrag={onDrag}>
      {children}
    </div>
  );
}

export default DraggableItem;
