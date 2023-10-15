import Exercise from '../components/Exercise';
import MOCK_TESTS from '../data/mock_tests';

const Tests = () => {
  return (
    <>
      {MOCK_TESTS.map((item) => {
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

export default Tests;
