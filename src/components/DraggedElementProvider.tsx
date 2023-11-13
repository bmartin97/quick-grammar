import { DraggedElementContext } from '@/hooks/useDraggedElementContext';
import { useState } from 'react';

export const DraggedElementProvider = ({ children }) => {
  const [draggedElement, setDraggedElement] = useState(null);

  return (
    <DraggedElementContext.Provider
      value={{
        draggedElement,
        setDraggedElement
      }}>
      {children}
    </DraggedElementContext.Provider>
  );
};

export default DraggedElementProvider;
