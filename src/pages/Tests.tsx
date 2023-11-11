import { CardColor } from '@/interfaces';
import BoxDrop from '../components/BoxDrop';

const BOX_DROP_OPTIONS = [
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

const Tests = () => {
  return (
    <>
      <BoxDrop options={BOX_DROP_OPTIONS} solution={BOX_DROP_SOLUTION} />;
    </>
  );
};

export default Tests;
