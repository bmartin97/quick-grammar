import { useRef, ReactNode } from 'react';
import styles from '../styles/DropArea.module.scss';
import { useDraggedElementContext } from '@/hooks/useDraggedElementContext';

export interface DropAreaProps {
  onDrop: () => void;
  onHoverChange?: (isHovered: boolean) => void;
  fullWidth?: boolean;
  children?: ReactNode;
}

const DropArea = ({
  onDrop = () => {},
  onHoverChange = () => {},
  fullWidth = false,
  children
}: DropAreaProps) => {
  const { draggedElement } = useDraggedElementContext();
  const itemRef = useRef(null);

  const isDraggedElementChildOfDropArea = () =>
    !draggedElement || itemRef.current.contains(draggedElement?.element);

  return (
    <div
      ref={itemRef}
      className={styles.dropArea}
      style={fullWidth ? { flexGrow: 1 } : {}}
      onDrop={() => {
        if (isDraggedElementChildOfDropArea()) {
          return;
        }

        onDrop();

        onHoverChange(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();

        if (isDraggedElementChildOfDropArea()) {
          return;
        }

        onHoverChange(true);
      }}
      onDragLeave={(e) => {
        if (!itemRef.current.contains(e.relatedTarget)) {
          onHoverChange(false);
        }
      }}>
      {children}
    </div>
  );
};

export default DropArea;
