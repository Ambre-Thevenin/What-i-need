import React, { useState } from 'react';
import AstroJokes from './JokesArray';

function RandomJokes() {
  const FirstToSee = 'Voulez-vous rire ?';
  const [textValue, setTextValue] = useState(FirstToSee);
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

  // const changeTextValue = () => {
  //   const len = SingleJoke.length;
  //   const joke = SingleJoke[Math.floor(Math.random() * len)];
  //   if (joke.type === 'Astres') {
  //     console.log('Astres');
  //     setTextValue(joke.text);
  //   } else {
  //     changeTextValue();
  //   }
  // };

  return (
    <div>
      <p>{textValue}</p>
      <button onClick={() => changeJokesValue('Jokes')} value="Click">
        Je veux rire
      </button>
      <button onClick={() => changeJokesValue('Astres')} value="Click">
        Un message des astres
      </button>
    </div>
  );
}

export default RandomJokes;
