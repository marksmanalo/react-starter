import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AboutPage from '../about/AboutPage';
import HomePage from '../home/HomePage';

const Header = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/about">About</Link>
          {" | "}
          <Link to="/topics">Topics</Link>
        </nav>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </Router>
  );
};

export default Header;