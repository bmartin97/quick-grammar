import { useContext } from 'react';
import { Context } from './App';

import DropArea from '../components/DropArea';
import styles from './Exercise.module.scss';
import Card from '../components/Card';
import { CARD_COLORS, DROPAREA_THEMES } from '../components/Helper';

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

const newTasksData = [
  {
    taskName: 'Simple Past',
    description:
      'The simple past tense (also called the past tense) is used to express actions that are completed at any time (recent or distant past) or for any duration (length of event).'
  },
  {
    taskName: 'Simple Present',
    description:
      '  The simple present tense (all called the present tense) is used to express action that is happening in the present, now, relative to the speaker or writer.'
  },
  {
    taskName: 'Simple Future',
    description:
      'The simple future tense (also called the future tense) is used to express action that will certainly occur at any time later than now.'
  }
];

const Exercise = ({ defaultItems, taskName, description }) => {
  const { draggedElement, setDraggedElement } = useContext(Context);
  return (
    <div style={{ padding: '20px 0 80px 0 ' }}>
      <div style={{ margin: ' auto', width: '650px', paddingBottom: '20px' }}>
        <h1>{taskName}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.exercise}>
        <DropArea
          theme={DROPAREA_THEMES.dashed}
          defaultItems={defaultItems}
          draggedElement={draggedElement}
          setDraggedElement={setDraggedElement}
        />
        <DropArea
          theme={DROPAREA_THEMES.cartoon}
          defaultItems={[]}
          draggedElement={draggedElement}
          setDraggedElement={setDraggedElement}></DropArea>
      </div>
    </div>
  );
};

const newExerciseTasks = () => {
  return (
    <>
      {newTasksData.map((item, index) => {
        return (
          <Exercise
            key={index}
            defaultItems={defaultItems}
            taskName={item.taskName}
            description={item.description}
          />
        );
      })}
    </>
  );
};

export default newExerciseTasks;
