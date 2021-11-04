import React from 'react';
// import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './components/contactForm';
import WinSquad from './components/squadPictures';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <WinSquad />
      <ContactForm />
    </div>
  );
}

export default App;
