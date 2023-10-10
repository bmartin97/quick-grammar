import PropTypes from 'prop-types';

import DropArea from '../components/DropArea';
import styles from './Exercise.module.scss';
import { DROPAREA_THEMES } from '../components/Helper';

const Exercise = ({ defaultItems, taskName, description }) => {
  return (
    <div style={{ padding: '20px 0 80px 0 ' }}>
      <div style={{ margin: ' auto', width: '650px', paddingBottom: '20px' }}>
        <h1>{taskName}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.exercise}>
        <DropArea theme={DROPAREA_THEMES.dashed} defaultItems={defaultItems} />
        <DropArea theme={DROPAREA_THEMES.cartoon} defaultItems={[]} />
      </div>
    </div>
  );
};

Exercise.propTypes = {
  defaultItems: PropTypes.array.isRequired,
  taskName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Exercise;
