import { useState, useRef, ReactNode } from 'react';
import styles from './DropArea.module.scss';
import { useDraggedElementContext } from '@/hooks/useDraggedElementContext';

interface Props {
  onDrop: () => void;
  fullWidth?: boolean;
  children?: ReactNode;
}

const DropArea = ({ onDrop, fullWidth, children }: Props) => {
  const { draggedElement } = useDraggedElementContext();
  const [hover, setHover] = useState(false);
  const itemRef = useRef(null);

  const Line = () => {
    return <div className={styles.line} />;
  };

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

        setHover(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();

        if (isDraggedElementChildOfDropArea()) {
          return;
        }

        setHover(true);
      }}
      onDragLeave={(e) => {
        if (!itemRef.current.contains(e.relatedTarget)) {
          setHover(false);
        }
      }}>
      {hover && <Line />}
      {children}
    </div>
  );
};

export default DropArea;
