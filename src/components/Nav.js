import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './assets/planet.png';
import './stylesheets/nav.css';

const Nav = () => (
  <nav className="nav-container">
    <div className="nav-logo">
      <img src={planet} alt="planet" id="nav-image" />
      <h1 className="nav-title">Space Traveler&lsquo;s Hub</h1>
    </div>
    <div className="navlink-container">
      <NavLink
        className="links"
        to="/"
        style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })}
      >
        Rockets
      </NavLink>
      <NavLink
        className="links"
        to="/profile"
        style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })}
      >
        Profile
      </NavLink>
      <NavLink
        className="links"
        to="/missions"
        style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })}
      >
        Missions
      </NavLink>
    </div>
  </nav>
);
export default Nav;
