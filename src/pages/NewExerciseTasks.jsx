import Exercise from './Exercise';
import { newTasksData } from './NewTasksData';

const NewExerciseTasks = () => {
  return (
    <>
      {newTasksData.map((item) => {
        return (
          <Exercise
            key={item.id}
            defaultItems={item.defaultItems}
            taskName={item.taskName}
            description={item.description}
          />
        );
      })}
    </>
  );
};

export default NewExerciseTasks;
