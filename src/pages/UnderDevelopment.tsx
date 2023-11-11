import { getRandomElementOf } from '../helpers';

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px'
      }}>
      <h1>Sorry, but this page is under development</h1>
      <br />
      <img
        height={500}
        src={`https://media.tenor.com/${getRandomElementOf(GIF_URLS)}`}
      />
    </div>
  );
};
