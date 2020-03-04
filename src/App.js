import React from 'react';

// Styles
import './App.css';

//Components
import Header from './components/Header';
import Home from './containers/Home';

function App() {
  return (
    <div class="SiteWrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;
