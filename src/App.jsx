import React from 'react';
import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './components/contactForm';
// import Nav from './components/Nav';
import WinSquad from './components/squadPictures';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
