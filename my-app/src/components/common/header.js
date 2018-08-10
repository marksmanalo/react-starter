import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AboutPage from '../about/AboutPage';
import HomePage from '../home/HomePage';
import './Header.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <Router>
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Demo App</h1>
        </header>
        <p className="Header-intro">
          <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/topics">Topics</Link>
          </nav>
        </p>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>      
    </Router>
  );
};

export default Header;