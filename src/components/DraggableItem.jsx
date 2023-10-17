import { useState } from 'react';
import PropTypes from 'prop-types';

function DraggableItem({ children, onDrag, onDragEnd, onDrop }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={'draggable'}
      draggable
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '5px'
      }}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDrop={() => {
        onDrop();
        setHover(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setHover(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        // child elements shouldn't have this functionality
        e.stopPropagation();
        // object has draggable class
        if (e.target.classList.contains('draggable')) {
          // prevent flickering when entering a child
          let rect = e.target.getBoundingClientRect();
          let mouseX = e.clientX;
          let mouseY = e.clientY;
          if (
            mouseX < rect.left ||
            mouseX >= rect.right ||
            mouseY < rect.top ||
            mouseY >= rect.bottom
          ) {
            setHover(false);
          }
        }
      }}>
      {hover && <Line />}
      {children}
    </div>
  );
}

DraggableItem.propTypes = {
  children: PropTypes.node.isRequired,
  onDrag: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func,
  onDrop: PropTypes.func.isRequired
};

export const Line = () => (
  <div
    className={'draggable'}
    style={{
      width: '5px',
      backgroundColor: 'blue',
      height: '30px',
      marginRight: '10px',
      pointerEvents: 'none'
    }}
  />
);

export default DraggableItem;
