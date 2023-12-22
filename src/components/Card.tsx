import { CardProps, CardColor } from '@/interfaces';
import { Chip, keyframes } from '@mui/material';
import { orange, blue, yellow, pink, green } from '@mui/material/colors';

const colors = {
  orange: orange,
  blue: blue,
  yellow: yellow,
  magenta: pink,
  green: green
};

function Card({ text, color }: CardProps) {
  const popupAnimation = keyframes`
    from {
    transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  `;

  return (
    <Chip
      sx={{
        animation: `${popupAnimation} 200ms ease`,
        backgroundColor: colors[CardColor[color]][800],
        color: colors[CardColor[color]][50],
        fontWeight: 600,
        cursor: 'pointer'
      }}
      label={text}
    />
  );
}

export default Card;
