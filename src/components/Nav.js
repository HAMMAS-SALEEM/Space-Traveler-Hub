import React from 'react';
import { Link } from 'react-router-dom';
import planet from './assets/planet.png';

const Nav = () => (
  <div className='nav-container'>
    <img src={planet} alt='planet' />
    <ul>
      <Link></Link>
      <Link></Link>
      <Link></Link>
    </ul>
  </div>
);
export default Nav;
