import React from 'react';
import { Link } from 'react-router-dom';
import planet from './assets/planet.png';

const Nav = () => (
  <nav className="nav-container">
    <img src={planet} alt="planet" />
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);
export default Nav;
