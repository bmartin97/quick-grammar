import { useState } from 'react';
import styles from '../styles/InputFillGaps.module.scss';

interface Props {
  sentences: string[];
  solution: string[];
}

const InputFillGaps = ({ sentences, solution }: Props) => {
  const INPUT_INDICATOR = '[]';
  const [answers, setAnswers] = useState({});

  function collectAnswers(event) {
    const { id, value } = event.target;
    setAnswers((prev) => {
      return {
        ...prev,
        [id]: { value: value.toLowerCase(), isCorrect: false }
      };
    });
  }

  function checkSolution() {
    for (let i = 0; i < solution.length; i++) {
      if (solution[i] === answers[createInputIndex(i)]?.value) {
        setAnswers((prev) => {
          return {
            ...prev,
            [createInputIndex(i)]: {
              ...prev[createInputIndex(i)],
              isCorrect: true
            }
          };
        });
      }
    }
  }

  function createInputIndex(rowIndex: number) {
    return 'row-' + rowIndex;
  }

  function renderSentenceWithInput(sentence: string, rowIndex: number) {
    const splittedSentence = sentence.split(INPUT_INDICATOR);

    if (splittedSentence.length >= 2) {
      return splittedSentence.map((sentencePart, index) => (
        <>
          {sentencePart}
          {index + 1 !== splittedSentence.length ? (
            <input
              className={
                answers[createInputIndex(rowIndex)]?.isCorrect
                  ? styles.correct
                  : null
              }
              key={index}
              type='text'
              id={createInputIndex(rowIndex)}
              onChange={collectAnswers}></input>
          ) : null}
        </>
      ));
    }
  }

  return (
    <div className={styles.inputFillGapsContainer}>
      <div className={styles.inputFillGapsContent}>
        {sentences.map((sentence, index) => (
          <div key={index} className={styles.inputFillGapsRow}>
            {index + 1} ) {renderSentenceWithInput(sentence, index)}
          </div>
        ))}
      </div>
      <button onClick={checkSolution}>CHECK</button>
    </div>
  );
};

export default InputFillGaps;
