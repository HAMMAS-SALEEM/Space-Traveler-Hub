import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './assets/planet.png';

const Nav = () => (
  <nav className="nav-container">
    <img src={planet} alt="planet" id="nav-image" />
    <div className="navlink-container">
      <NavLink
        id="links"
        to="/"
        style={({ isActive }) => (isActive ? { color: 'gray' } : { color: 'black' })}
      >
        Rockets
      </NavLink>
      <NavLink
        id="links"
        to="/profile"
        style={({ isActive }) => (isActive ? { color: 'gray' } : { color: 'black' })}
      >
        Profile
      </NavLink>
      <NavLink
        id="links"
        to="/missions"
        style={({ isActive }) => (isActive ? { color: 'gray' } : { color: 'black' })}
      >
        Missions
      </NavLink>
    </div>
  </nav>
);
export default Nav;
