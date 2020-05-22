import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';

const App = props => {
  return (<React.Fragment>
    <Navigation />
    <main>
      <Route path='/' component={Home} exact></Route>
      <Route path='/about' component={About} exact></Route>
      <Route path='/contact' component={ContactUs} exact></Route>
    </main>
  </React.Fragment>);
};

export default App;
