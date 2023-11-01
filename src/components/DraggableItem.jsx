function DraggableItem({ children, onDrag, onDragEnd }) {
  return (
    <div draggable onDrag={onDrag} onDragEnd={onDragEnd}>
      {children}
    </div>
  );
}

export default DraggableItem;
