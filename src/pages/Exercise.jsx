import { useState } from 'react';
import DropArea from '../components/DropArea';
import styles from './Exercise.module.scss';
import Card from '../components/Card';
import { CARD_COLORS } from '../components/Helper';

const defaultItems = [
  {
    value: 'G-0',
    component: Card,
    props: {
      text: 'subject',
      color: CARD_COLORS.blue
    }
  },
  {
    value: 'G-1',
    component: Card,
    props: {
      text: 'verb',
      color: CARD_COLORS.orange
    }
  },
  {
    value: 'G-2',
    component: Card,
    props: {
      text: '+ing',
      color: CARD_COLORS.yellow
    }
  }
];

function Exercise() {
  const [draggedElement, setDraggedElement] = useState(null);

  return (
    <>
      <div className={styles.exercise}>
        <DropArea
          color={'destination'}
          defaultItems={defaultItems}
          draggedElement={draggedElement}
          setDraggedElement={setDraggedElement}
        />
        <DropArea
          color={'destination'}
          defaultItems={[]}
          draggedElement={draggedElement}
          setDraggedElement={setDraggedElement}></DropArea>
      </div>
    </>
  );
}

export default Exercise;
