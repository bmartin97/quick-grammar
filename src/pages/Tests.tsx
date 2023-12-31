import { CardColor, CardProps } from '@/interfaces';
import BoxDrop from '../components/exercises/BoxDrop';
import DropFillGaps from '@/components/exercises/DropFillGaps';
import InputFillGaps from '@/components/exercises/InputFillGaps ';

const BOX_DROP_OPTIONS: CardProps[] = [
  {
    text: 'The',
    color: CardColor.blue
  },
  {
    text: 'table',
    color: CardColor.yellow
  },
  {
    text: 'is',
    color: CardColor.blue
  },
  {
    text: 'book',
    color: CardColor.yellow
  },
  {
    text: 'on',
    color: CardColor.green
  },
  {
    text: 'the',
    color: CardColor.green
  }
];

const BOX_DROP_SOLUTION = ['The', 'book', 'is', 'on', 'the', 'table'];

const DROP_FILL_GAPS_SENTENCES = [
  'The book is [] the table.',
  'I will meet you [] the coffee shop.',
  'The cat is  hiding [] the bed.',
  'She lives [] a charming little cottage.',
  'He ran [] the forest.'
];
const DROP_FILL_GAPS_OPTIONS: CardProps[] = [
  {
    text: 'under',
    color: CardColor.yellow
  },
  {
    text: 'above',
    color: CardColor.yellow
  },
  {
    text: 'in',
    color: CardColor.yellow
  },
  {
    text: 'through',
    color: CardColor.yellow
  },
  {
    text: 'beside',
    color: CardColor.yellow
  },
  {
    text: 'on',
    color: CardColor.yellow
  },
  {
    text: 'at',
    color: CardColor.yellow
  }
];

const DROP_FILL_GAPS_SOLUTION = ['on', 'at', 'under', 'in', 'through'];
const Tests = () => {
  return (
    <>
      <BoxDrop options={BOX_DROP_OPTIONS} solution={BOX_DROP_SOLUTION} />;
      <DropFillGaps
        sentences={DROP_FILL_GAPS_SENTENCES}
        options={DROP_FILL_GAPS_OPTIONS}
        solution={DROP_FILL_GAPS_SOLUTION}
      />
      <InputFillGaps
        sentences={DROP_FILL_GAPS_SENTENCES}
        solution={DROP_FILL_GAPS_SOLUTION}
      />
    </>
  );
};

export default Tests;
