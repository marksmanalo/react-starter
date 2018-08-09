import React from 'react';
import '../../App.css';
import logo from '../../logo.svg';

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Demo App</h1>
      </header>
      <p className="App-intro">
        Home Page
      </p>
    </div>
  );
};

export default HomePage;