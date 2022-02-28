import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './assets/planet.png';

const Nav = () => (
  <nav className="nav-container">
    <img src={planet} alt="planet" />
    <NavLink
      exact
      to="/"
      className="main-nav-active"
      style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
    >
      Home
    </NavLink>
    <NavLink
      exact
      to="/profile"
      style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
    >
      Profile
    </NavLink>
    <NavLink
      exact
      to="/missions"
      style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
    >
      Missions
    </NavLink>
    <NavLink
      exact
      to="/rockets"
      style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
    >
      Rockets
    </NavLink>
  </nav>
);
export default Nav;
