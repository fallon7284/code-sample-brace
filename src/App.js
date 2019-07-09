import React from 'react';
import BeerList from './components/BeerList'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path='/' component={BeerList}/>
      
    </Router>
  );
}

export default App;
