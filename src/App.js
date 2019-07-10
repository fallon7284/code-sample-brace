import React from 'react';
import BeerList from './components/BeerList'
import BeerFull from './components/BeerFull'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/' component={BeerList}/>
      <Route path='/:id' component={BeerFull}/>
    </Router>
  );
}

export default App;
