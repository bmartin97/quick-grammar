import { getRandomElementOf } from '../helpers';
import { Box, Typography, Card } from '@mui/material';

const GIF_URLS = [
  'M8NOboaCB2MAAAAC/peter-griffin-nails.gif',
  'iCqG_iT-h48AAAAC/bills-ugh.gif',
  'LExRuFJBzJ4AAAAC/cat-typing-cat-typing-fire.gif',
  'FgfxDZu3574AAAAd/baby-keyboard-smash.gif',
  'fJb_Ni3a1okAAAAC/bojdrak.gif',
  '6-IJhkmMwR8AAAAd/typing-man.gif'
];

export const UnderDevelopment = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5
        }}>
        <Typography variant='h4'>
          Sorry, but this page is under development
        </Typography>
        <br />
        <Card
          height={500}
          component='img'
          src={`https://media.tenor.com/${getRandomElementOf(GIF_URLS)}`}
        />
      </Box>
    </>
  );
};
