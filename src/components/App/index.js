import React from 'react';
import logo from './logo.svg';
import './style.css';

import SearchBar from '../SearchBar';
import GithubDataTable from '../GithubDataTable';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">The GitHub Finder</h1>
      <p className="App-subtitle">powered by</p>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div>
      <SearchBar />
      <GithubDataTable />
    </div>
  </div>
);

export default App;
