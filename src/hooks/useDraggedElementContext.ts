import { createContext, useContext } from 'react';

export const DraggedElementContext = createContext(null);

export const useDraggedElementContext = () => {
  const context = useContext(DraggedElementContext);

  if (!context) {
    throw new Error(
      'useDraggedElementContext must be used inside the ThemeProvider'
    );
  }

  return context;
};
