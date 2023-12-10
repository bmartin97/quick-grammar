import { Paper, PaperProps, Stack } from '@mui/material';

interface BoxProps {
  children: any;
  defaultPadding?: boolean;
  orientation?: 'row' | 'column';
}

function CardStack({
  orientation = 'row',
  defaultPadding = true,
  children,
  ...PaperProps
}: BoxProps & PaperProps) {
  const CONTAINER_PADDING = {
    row: {
      ['> *:first-child']: {
        pl: 2
      }
    },
    column: {
      ['> *']: {
        pl: 1.5
      },
      ['> *:first-child']: {
        pt: 2
      }
    }
  };

  return (
    <Paper {...(PaperProps as PaperProps)}>
      <Stack
        flexDirection={orientation}
        flexWrap={'wrap'}
        alignItems={'stretch'}
        maxWidth={'100%'}
        height={'100%'}
        flexGrow={1}
        sx={defaultPadding ? CONTAINER_PADDING[orientation] : {}}>
        {children}
      </Stack>
    </Paper>
  );
}

export default CardStack;
