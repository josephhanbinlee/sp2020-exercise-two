import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import './App.css';

//Components
import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return ( 
    <div class="SiteWrapper">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;