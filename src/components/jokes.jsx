import React, { useState } from 'react';
import AstroJokes from './JokesArray';
import styles from './jokes.module.css';

function RandomJokes() {
  const FirstToSeeJokes = 'De quoi avez-vous besoin ?';
  const [textValue, setTextValue] = useState(FirstToSeeJokes);
  const SingleJoke = [...AstroJokes];

  const changeJokesValue = (filter) => {
    const len = SingleJoke.length;
    const joke = SingleJoke[Math.floor(Math.random() * len)];
    if (joke.type === filter) {
      setTextValue(joke.text);
    } else {
      changeJokesValue(filter);
    }
  };

  return (
    <div className={styles.astrojokesmodule}>
      <p className={styles.text}>{textValue}</p>
      <button className={styles.button} onClick={() => changeJokesValue('Jokes')} value="Click">
        Je veux rire
      </button>
      <button className={styles.button} onClick={() => changeJokesValue('Astres')} value="Click">
        Un message des astres
      </button>
    </div>
  );
}

export default RandomJokes;
