import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AboutPage from '../about/AboutPage';

const Header = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/topics">Topics</Link>

        <Route path="/about" component={AboutPage} />
      </nav>
    </Router>
  );
};

export default Header;