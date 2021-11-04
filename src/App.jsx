import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './Components/contactForm';
import WinSquad from './Components/squadPictures';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
