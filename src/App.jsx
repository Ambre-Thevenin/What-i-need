import React from 'react';
import LandingPage from './components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import ContactForm from './components/contactForm';
import WinSquad from './components/squadPictures';
import './App.css';

// import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/About">
          <WinSquad />
          <ContactForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
