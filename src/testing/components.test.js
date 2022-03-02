import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Mission from '../components/Mission';
import Nav from '../components/Nav';
// import Profile from '../components/Profile';
// import Rocket from '../components/Rocket';

describe('Navbar Test', () => {
    test('render nav bar', () => {
      const { container, getByText } = render(
        <MemoryRouter>
          <Nav />
        </MemoryRouter>,
      )
      expect(container.firstChild).toMatchInlineSnapshot(`
<nav
  class="nav-container"
>
  <div
    class="nav-logo"
  >
    <img
      alt="planet"
      id="nav-image"
      src="planet.png"
    />
    <h1
      class="nav-title"
    >
      Space Traveler‘s Hub
    </h1>
  </div>
  <div
    class="navlink-container"
  >
    <a
      aria-current="page"
      class="links active"
      href="/"
      style="text-decoration: underline;"
    >
      Rockets
    </a>
    <a
      class="links"
      href="/profile"
      style="text-decoration: none;"
    >
      Profile
    </a>
    <a
      class="links"
      href="/missions"
      style="text-decoration: none;"
    >
      Missions
    </a>
  </div>
</nav>
`);
  });
    })