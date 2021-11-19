import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import ContactForm from './components/contactForm';
import WinSquad from './components/squadPictures';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
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
    </div>
  );
}

export default App;
