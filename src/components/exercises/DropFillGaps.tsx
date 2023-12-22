import { transformCardPropsToItems } from '@/helpers';
import { CardProps } from '@/interfaces';
import CardStack from '../CardStack';
import SingleDropContainer from '../core/SingleDropContainer';
import DropContainer from '../core/DropContainer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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
        <CardStack
          orientation='column'
          defaultPadding={false}
          sx={{
            display: 'inline-block',
            height: 45,
            minWidth: 60,
            mx: 1
          }}>
          <SingleDropContainer defaultItem={null} />
        </CardStack>
      )}
    </>
  ));
}

function sentenceNumber(number) {
  return number + ')';
}

function DropFillGaps({ sentences, options }: Props) {
  return (
    <Stack
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      margin={'auto'}
      width={600}>
      <CardStack
        orientation={'column'}
        sx={{
          width: 150
        }}>
        <DropContainer defaultItems={transformCardPropsToItems(options)} />
      </CardStack>
      <Box>
        {sentences.map((sentence, index) => (
          <Typography
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1.5
            }}>
            {sentenceNumber(index + 1)} {transformSentence(sentence)}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
}

export default DropFillGaps;
