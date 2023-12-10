import { CardColor, CardProps } from '@/interfaces';
import BoxDrop from '../components/exercises/BoxDrop';
import DropFillGaps from '@/components/exercises/DropFillGaps';

const BOX_DROP_OPTIONS: CardProps[] = [
  {
    text: 'The',
    color: CardColor.blue
  },
  {
    text: 'table',
    color: CardColor.orange
  },
  {
    text: 'is',
    color: CardColor.blue
  },
  {
    text: 'book',
    color: CardColor.orange
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
    color: CardColor.orange
  },
  {
    text: 'above',
    color: CardColor.orange
  },
  {
    text: 'in',
    color: CardColor.orange
  },
  {
    text: 'through',
    color: CardColor.orange
  },
  {
    text: 'beside',
    color: CardColor.orange
  },
  {
    text: 'on',
    color: CardColor.orange
  },
  {
    text: 'at',
    color: CardColor.orange
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
    </>
  );
};

export default Tests;
