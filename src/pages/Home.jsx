import { useState } from 'react';
import DraggableItem from '../components/DraggableItem';
import DropArea from '../components/DropArea';
import styles from './Home.module.scss';

function Home() {
  const [grammars, setGrammars] = useState([
    {
      id: 1,
      text: 'subject',
      bgColor: 'textOrange'
    },
    {
      id: 2,
      text: 'verb',
      bgColor: 'textPurple'
    },
    {
      id: 3,
      text: '+ing',
      bgColor: 'textPurpleLight'
    },
    {
      id: 4,
      text: '+s/es',
      bgColor: 'textPurpleLight'
    },
    {
      id: 5,
      text: 'question word',
      bgColor: 'textGreen'
    },
    {
      id: 6,
      text: 'did',
      bgColor: 'textMagenta'
    },
    {
      id: 7,
      text: 'do/does',
      bgColor: 'textMagenta'
    },
    {
      id: 8,
      text: 'have/has',
      bgColor: 'textMagenta'
    },
    {
      id: 9,
      text: 'was/were',
      bgColor: 'textMagenta'
    }
  ]);
  const [selectedGrammars, setSelectedGrammars] = useState([]);
  const [draggedGrammar, setDraggedGrammar] = useState();

  const onDrag = (event, draggedG) => {
    event.preventDefault();
    setDraggedGrammar(draggedG);
  };

  const onDrop = (event) => {
    const isDraggedInGrammars = grammars.some((grammar) => {
      return grammar.id === draggedGrammar.id;
    });
    const isDraggedInSelectedGrammars = selectedGrammars.some((grammar) => {
      return grammar.id === draggedGrammar.id;
    });

    if (isDraggedInGrammars) {
      const grammarsWithoutDragged = grammars.filter((grammar) => {
        return grammar.id !== draggedGrammar.id;
      });
      setGrammars(grammarsWithoutDragged);
    } else {
      setGrammars([...grammars, draggedGrammar]);
    }

    if (isDraggedInSelectedGrammars) {
      const selectedGrammarsWithoutDragged = selectedGrammars.filter(
        (grammar) => {
          return grammar.id !== draggedGrammar.id;
        }
      );
      setSelectedGrammars(selectedGrammarsWithoutDragged);
    } else {
      setSelectedGrammars([...selectedGrammars, draggedGrammar]);
    }
  };

  return (
    <div className={styles.home}>
      <DropArea
        color={'dopAreaStart'}
        onDrop={(event) => onDrop(event)}
        children={grammars.map((grammar, index) => (
          <DraggableItem
            key={index}
            text={grammar.text}
            color={grammar.bgColor}
            onDrag={(event) => onDrag(event, grammar)}></DraggableItem>
        ))}></DropArea>

      <DropArea
        color={'dopAreaEnd'}
        onDrop={(event) => onDrop(event)}
        children={selectedGrammars.map((grammar, index) => (
          <DraggableItem
            key={index}
            text={grammar.text}
            color={grammar.bgColor}
            onDrag={(event) => onDrag(event, grammar)}></DraggableItem>
        ))}></DropArea>
    </div>
  );
}

export default Home;
