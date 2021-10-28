import React, { useState, useEffect } from 'react';
import './Date.css';

function CurrentDate() {
  const [userName, setUserName] = useState(localStorage.getItem('name'));
  useEffect(() => {
    if (!localStorage.getItem('name')) {
      const user = prompt('Quel est votre nom ?');
      setUserName(user);
      localStorage.setItem('name', user);
    }
  }, [userName]);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDay = currentDate.toLocaleDateString('fr-FR', options);
  const currentTime = currentDate.toLocaleTimeString('fr-FR');
  return (
    <div className="Date-Intro">
      <h1>Bonjour {userName === 'null' || userName === undefined ? '' : userName},</h1>
      <p>Nous sommes le {currentDay},</p>
      <p>il est {currentTime}</p>
    </div>
  );
}

export default CurrentDate;
