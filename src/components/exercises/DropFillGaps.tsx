import { transformCardPropsToItems } from '@/helpers';
import { CardProps } from '@/interfaces';
import Box from '../Box';
import styles from '../styles/DropFillGaps.module.scss';
import SingleDropContainer from '../core/SingleDropContainer';
import DropContainer from '../core/DropContainer';

interface Props {
  sentences: string[];
  options: CardProps[];
  solution: string[];
}

const GAP_INDICATOR = '[]';

function transformSentence(sentence: string) {
  const sentenceParts = sentence.split(GAP_INDICATOR);

  return sentenceParts.map((subSentence, index, arr) => (
    <>
      {subSentence}
      {index !== arr.length - 1 && (
        <Box
          theme='dashed'
          orientation='column'
          width={'100px'}
          height={'30px'}
          inline={true}>
          <SingleDropContainer defaultItem={null} />
        </Box>
      )}
    </>
  ));
}

function sentenceNumber(number) {
  return number + ')';
}

function DropFillGaps({ sentences, options }: Props) {
  return (
    <div className={styles.dropFillGapsContainer}>
      <Box theme={'dashed'} orientation={'column'}>
        <DropContainer defaultItems={transformCardPropsToItems(options)} />
      </Box>
      <div className={styles.sentencesContainer}>
        {sentences.map((sentence, index) => (
          <div key={index}>
            {sentenceNumber(index + 1)} {transformSentence(sentence)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropFillGaps;
