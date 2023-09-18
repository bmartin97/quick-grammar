import { useState } from 'react';
import DraggableItem from '../components/DraggableItem';
import DropArea from '../components/DropArea';
import styles from './Home.module.scss';

function Home() {
  const [sources, setSources] = useState([
    {
      id: 'G-0',
      text: 'subject',
      bgColor: 'textOrange'
    },
    {
      id: 'G-1',
      text: 'verb',
      bgColor: 'textPurple'
    },
    {
      id: 'G-2',
      text: '+ing',
      bgColor: 'textPurpleLight'
    },
    {
      id: 'G-3',
      text: '+s/es',
      bgColor: 'textPurpleLight'
    },
    {
      id: 'G-4',
      text: 'question word',
      bgColor: 'textGreen'
    },
    {
      id: 'G-5',
      text: 'did',
      bgColor: 'textMagenta'
    },
    {
      id: 'G-6',
      text: 'do/does',
      bgColor: 'textMagenta'
    },
    {
      id: 'G-7',
      text: 'have/has',
      bgColor: 'textMagenta'
    },
    {
      id: 'G-8',
      text: 'was/were',
      bgColor: 'textMagenta'
    },
    {
      id: 'G-9',
      text: 'will',
      bgColor: 'textMagenta'
    }
  ]);

  const [destinations, setDestinations] = useState([]);
  const [draggedItem, setDraggedItem] = useState();

  const onDrag = (event, draggedI) => {
    event.preventDefault();
    setDraggedItem(draggedI);
  };

  const onDrop = (event, isSource) => {
    const destinationsWithoutDraggedItem = destinations.filter(
      (destionation) => {
        return destionation.id !== draggedItem.id;
      }
    );
    const sourcesWithoutDraggedItem = sources.filter((source) => {
      return source.id !== draggedItem.id;
    });

    if (isSource) {
      setSources([...sourcesWithoutDraggedItem, draggedItem]);
      setDestinations([...destinationsWithoutDraggedItem]);
    }

    if (!isSource) {
      setSources([...sourcesWithoutDraggedItem]);
      setDestinations([...destinationsWithoutDraggedItem, draggedItem]);
    }
  };

  return (
    <div className={styles.home}>
      <DropArea color={'source'} onDrop={(event) => onDrop(event, true)}>
        {sources.map((source, index) => (
          <DraggableItem
            key={index}
            text={source.text}
            color={source.bgColor}
            onDrag={(event) => onDrag(event, source)}></DraggableItem>
        ))}
      </DropArea>

      <DropArea color={`destination`} onDrop={(event) => onDrop(event, false)}>
        {destinations.map((destination, index) => (
          <DraggableItem
            key={index}
            text={destination.text}
            color={destination.bgColor}
            onDrag={(event) => onDrag(event, destination)}></DraggableItem>
        ))}
      </DropArea>
    </div>
  );
}

export default Home;
