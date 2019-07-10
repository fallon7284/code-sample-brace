import React from 'react';
import BeerList from './components/BeerList'
import BeerFull from './components/BeerFull'
import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeView from './components/HomeView';

function App() {
  return (
    <div>
      <Header className="header"/>
      <Router>
        <Route exact path='/' component={HomeView}/>
        <Route exact path='/beers' component={BeerList}/>
        <Route path='/beers/:id' component={BeerFull}/>
      </Router>
    </div>
  );
}

export default App;
