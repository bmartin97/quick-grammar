import { getRandomElementOf } from '../helpers';
import { Box, Typography, Card, Button, Link } from '@mui/material';

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
          mt: 50 /* mt means marginTop */
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

      <Box
        sx={{
          mt: 10,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <Button variant='contained'>It is not finished yet</Button>
        <Button variant='contained' sx={{ bgcolor: 'red', m: 5 }}>
          <Link
            sx={{ textDecoration: 'none', color: '#fff' }}
            href='https://mui.com/material-ui/getting-started/'>
            If you want to know more about MUI, click here!
          </Link>
        </Button>
      </Box>
    </>
  );
};
