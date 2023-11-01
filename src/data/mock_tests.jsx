import Card from '../components/Card';
import { CARD_COLORS } from '../components/Helper';

export default [
  {
    id: Math.random(),
    taskName: 'Simple Past',
    description:
      'The simple past tense (also called the past tense) is used to express actions that are completed at any time (recent or distant past) or for any duration (length of event).',
    defaultItems: [
      {
        value: 'G-0',
        component: Card,
        props: {
          text: 'I ',
          color: CARD_COLORS.blue
        }
      },
      {
        value: 'G-1',
        component: Card,
        props: {
          text: 'did',
          color: CARD_COLORS.orange
        }
      },
      {
        value: 'G-2',
        component: Card,
        props: {
          text: 'exercise',
          color: CARD_COLORS.yellow
        }
      }
    ]
  },
  {
    id: Math.random(),
    taskName: 'Simple Present',
    description:
      '  The simple present tense (all called the present tense) is used to express action that is happening in the present, now, relative to the speaker or writer.',
    defaultItems: [
      {
        value: 'Ga-0',
        component: Card,
        props: {
          text: 'He',
          color: CARD_COLORS.blue
        }
      },
      {
        value: 'Ga-1',
        component: Card,
        props: {
          text: 'loves',
          color: CARD_COLORS.magenta
        }
      },
      {
        value: 'Ga-2',
        component: Card,
        props: {
          text: 'math',
          color: CARD_COLORS.yellow
        }
      }
    ]
  },
  {
    id: Math.random(),
    taskName: 'Simple Future',
    description:
      'The simple future tense (also called the future tense) is used to express action that will certainly occur at any time later than now.',
    defaultItems: [
      {
        value: 'Gf-0',
        component: Card,
        props: {
          text: 'You',
          color: CARD_COLORS.green
        }
      },
      {
        value: 'Gf-1',
        component: Card,
        props: {
          text: 'will',
          color: CARD_COLORS.orange
        }
      },
      {
        value: 'Gf-2',
        component: Card,
        props: {
          text: 'learn',
          color: CARD_COLORS.yellow
        }
      }
    ]
  }
];
