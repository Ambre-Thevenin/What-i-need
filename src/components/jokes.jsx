import React, { useState } from 'react';
import Jokes from './JokesArray';

function RandomJokes() {
  const FirstToSee = 'Voulez-vous rire ?';
  const [textValue, setTextValue] = useState(FirstToSee);
  const SingleJoke = [...Jokes];

  const changeTextValue = () => {
    const len = SingleJoke.length;
    setTextValue(SingleJoke[Math.floor(Math.random() * len)].text);
  };

  return (
    <div>
      <p>{textValue}</p>
      <button onClick={changeTextValue} value="Click">
        Click
      </button>
    </div>
  );
}

export default RandomJokes;
