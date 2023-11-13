import { useState } from 'react';
import Box, { Item } from './Box';
import Card from './Card';
import styles from './styles/Exercise.module.scss';
import { CardProps } from '@/interfaces';

interface Props {
  options: CardProps[];
  solution: string[];
}

function transformCardPropsToItems(cardProps: CardProps[]): Item[] {
  return cardProps.map(({ text, color }) => ({
    value: text,
    component: Card,
    props: { text, color }
  }));
}

const BoxDrop = ({ options, solution }: Props) => {
  const [solutionBoxContent, setSolutionBoxContent] = useState<Item[]>();

  function checkSolution() {
    const currentSolution = solutionBoxContent.map((card) => card.value);

    if (currentSolution.join() === solution.join()) {
      alert('Good Answer!');
    } else {
      alert('Wrong Answer!');
    }
  }

  return (
    <div className={styles.exercise}>
      <Box theme={'dashed'} defaultItems={transformCardPropsToItems(options)} />
      <Box
        theme={'cartoon'}
        defaultItems={[]}
        onUpdate={setSolutionBoxContent}
      />
      <button onClick={checkSolution}>Check</button>
    </div>
  );
};

export default BoxDrop;
