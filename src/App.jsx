import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './Components/contactForm';
import WinSquad from './Components/squadPictures';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <WinSquad />
          <ContactForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
