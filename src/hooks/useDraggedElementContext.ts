import { Item } from '@/interfaces';
import { Dispatch, createContext, useContext } from 'react';

interface DraggedElement extends Item {
  element: EventTarget;
  removeFromCurrentPosition: () => void;
}

interface DraggedElementContextType {
  draggedElement: DraggedElement;
  setDraggedElement: Dispatch<DraggedElement>;
}

export const DraggedElementContext =
  createContext<DraggedElementContextType | null>(null);

export const useDraggedElementContext = (): DraggedElementContextType => {
  const context = useContext(DraggedElementContext);

  if (!context) {
    throw new Error(
      'useDraggedElementContext must be used inside the ThemeProvider'
    );
  }

  return context;
};
