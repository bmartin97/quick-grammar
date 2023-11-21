import Box from '../Box';
import styles from '../styles/Exercise.module.scss';
import { CardProps } from '@/interfaces';
import { transformCardPropsToItems } from '@/helpers';
import OrderableDropContainer from '../core/OrderableDropContainer';

interface Props {
  options: CardProps[];
  solution: string[];
}

const BoxDrop = ({ options }: Props) => {
  return (
    <div className={styles.exercise}>
      <Box theme={'dashed'}>
        <OrderableDropContainer
          defaultItems={transformCardPropsToItems(options)}
        />
      </Box>
      <Box theme={'cartoon'}>
        <OrderableDropContainer defaultItems={[]} />
      </Box>
    </div>
  );
};

export default BoxDrop;
