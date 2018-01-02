import React from 'react';
import logo from './logo.svg';
import './style.css';

import SearchBar from '../SearchBar';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">The Task</h1>
    </header>
    <div>
      <SearchBar />
    </div>
  </div>
);

export default App;
