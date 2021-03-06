import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h2>Jarrod Savard</h2>
    </Link>
    <div className="options">
      <Link className="option" to="/about">
        About
      </Link>
      <Link className="option" to="/projects">
        Projects
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
