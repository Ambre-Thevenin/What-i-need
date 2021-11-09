import React from 'react';
import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './components/contactForm';
// import Nav from './components/Nav';
import WinSquad from './components/squadPictures';
import { Route, Switch } from 'react-router-dom';
// import MeteoForecast from './Components/MeteoForecast';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/About">
          <WinSquad />
          <ContactForm />
        </Route>
      </Switch>
      {/* <MeteoForecast /> */}
    </div>
  );
}

export default App;
