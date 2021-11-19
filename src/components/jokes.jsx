import React, { useState } from 'react';
import AstroJokes from './JokesArray';
import styles from './jokes.module.css';

function RandomJokes() {
  const FirstToSeeJokes = 'De quoi avez-vous besoin ?';
  const [textValue, setTextValue] = useState(FirstToSeeJokes);

  const changeJokesValue = (filter) => {
    const len = AstroJokes.length;
    const joke = AstroJokes[Math.floor(Math.random() * len)];
    if (joke.type === filter) {
      setTextValue(joke.text);
    } else {
      changeJokesValue(filter);
    }
  };

  return (
    <div className={styles.astrojokesmodule}>
      <p className={styles.text}>{textValue}</p>
      <div className={styles.br}>
        <button className={styles.button} onClick={() => changeJokesValue('Jokes')} value="Click">
          Je veux rire
        </button>
        <button className={styles.button} onClick={() => changeJokesValue('Astres')} value="Click">
          Un message des astres
        </button>
      </div>
    </div>
  );
}

export default RandomJokes;
