import CardStack from '../Box';
import { CardProps } from '@/interfaces';
import { transformCardPropsToItems } from '@/helpers';
import OrderableDropContainer from '../core/OrderableDropContainer';
import Stack from '@mui/material/Stack';

interface BoxDropProps {
  options: CardProps[];
  solution: string[];
}

const BoxDrop = ({ options }: BoxDropProps) => {
  return (
    <Stack flexDirection={'column'} gap={2} alignItems={'center'}>
      <CardStack
        sx={{
          minWidth: 600,
          maxWidth: 800,
          height: 60
        }}>
        <OrderableDropContainer
          defaultItems={transformCardPropsToItems(options)}
        />
      </CardStack>
      <CardStack
        sx={{
          minWidth: 600,
          maxWidth: 800,
          height: 60
        }}>
        <OrderableDropContainer defaultItems={[]} />
      </CardStack>
    </Stack>
  );
};

export default BoxDrop;
