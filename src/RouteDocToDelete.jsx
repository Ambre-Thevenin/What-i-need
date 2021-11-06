import React from 'react';
import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './components/contactForm';
import Header from './components/Header';
import WinSquad from './components/squadPictures';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <WinSquad />
            <ContactForm />
          </Route>
          <Route path="/Components/LandingPage" component={LandingPage}>
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
