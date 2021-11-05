import React from 'react';
// import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './components/contactForm';
import Nav from './components/Nav';
import WinSquad from './components/squadPictures';

function App() {
  return (
    <div>
      <Nav />
      <WinSquad />
      <ContactForm />
    </div>
  );
}

export default App;
