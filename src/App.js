import React from 'react';
import BeerPage from './components/BeerPage'
import BeerFull from './components/BeerFull'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeView from './components/HomeView';

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomeView}/>
      <Route exact path='/beers' component={BeerPage}/>
      <Route path='/beers/:id' component={BeerFull}/>
    </Router>
  );
}

export default App;
