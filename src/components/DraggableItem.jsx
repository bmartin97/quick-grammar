import { useState } from 'react';
import PropTypes from 'prop-types';

function DraggableItem({ children, onDrag, onDragEnd, onDrop }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      draggable
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDrop={() => {
        onDrop();
        setHover(false);
      }}
      onDragOver={() => setHover(true)}
      onDragLeave={() => setHover(false)}>
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
    style={{
      width: '5px',
      backgroundColor: 'blue',
      height: '30px',
      marginRight: '10px'
    }}
  />
);

export default DraggableItem;
