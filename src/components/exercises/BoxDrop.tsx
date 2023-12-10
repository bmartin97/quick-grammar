import Box from '../Box';
import styles from '../styles/Exercise.module.scss';
import { CardProps } from '@/interfaces';
import { transformCardPropsToItems } from '@/helpers';
import OrderableDropContainer from '../core/OrderableDropContainer';

interface BoxDropProps {
  options: CardProps[];
  solution: string[];
}

const BoxDrop = ({ options }: BoxDropProps) => {
  return (
    <div className={styles.exercise}>
      <Box
        sx={{
          minWidth: 600,
          height: 60
        }}>
        <OrderableDropContainer
          defaultItems={transformCardPropsToItems(options)}
        />
      </Box>
      <Box
        sx={{
          minWidth: 600,
          height: 60
        }}>
        <OrderableDropContainer defaultItems={[]} />
      </Box>
    </div>
  );
};

export default BoxDrop;
