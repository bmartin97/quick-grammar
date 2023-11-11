import Box, { Item } from './Box';
import styles from './Exercise.module.scss';

interface Props {
  taskName: string;
  description: string;
  defaultItems: Item[];
}

const Exercise = ({ taskName, description, defaultItems }: Props) => {
  return (
    <div style={{ padding: '20px 0 80px 0 ' }}>
      <div style={{ margin: ' auto', width: '650px', paddingBottom: '20px' }}>
        <h1>{taskName}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.exercise}>
        <Box theme={'dashed'} defaultItems={defaultItems} />
        <Box theme={'cartoon'} defaultItems={[]} />
      </div>
    </div>
  );
};

export default Exercise;
