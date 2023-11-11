import { DragEventHandler, ReactNode } from 'react';

interface Props {
  onDrag: DragEventHandler;
  children?: ReactNode;
}

function DraggableItem({ onDrag, children }: Props) {
  return (
    <div draggable onDrag={onDrag}>
      {children}
    </div>
  );
}

export default DraggableItem;
