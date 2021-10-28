import React from 'react';
import Header from './Header';
import ContactForm from './contactForm';
import WinSquad from './squadPictures';
import styles from './about.module.css';
import './App.css';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <div>
        <h1>À propos de nous</h1>
      </div>
      <div className="winSquad">
        <WinSquad />
        <div className="Form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
