import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Mission from '../components/Mission';
import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Rocket from '../components/Rocket';

describe('Render All Components', () => {
    test('render navbar', () => {
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

        test('render missions', () => {
          const { container, getByText } = render(
            <MemoryRouter>
                <Provider store={store}>
                <Mission />
                </Provider>
            </MemoryRouter>,
          )
          expect(container.firstChild).toMatchInlineSnapshot(`
<table
  class="mission-container"
>
  <thead>
    <tr>
      <th>
        Mission
      </th>
      <th>
        Description
      </th>
      <th>
        Status
      </th>
      <th>
         
      </th>
    </tr>
  </thead>
</table>
`);
      });

            test('render Profile', () => {
              const { container, getByText } = render(
                <MemoryRouter>
                    <Provider store={store}>
                    <Profile />
                    </Provider>
                </MemoryRouter>,
              )
              expect(container.firstChild).toMatchInlineSnapshot(`
<section
  class="profile-container"
>
  <table
    class="profile-mission-container"
  >
    <thead>
      <tr>
        <th
          class="table-heading"
        >
          <h2
            class="h2"
          >
            Missions
          </h2>
        </th>
      </tr>
    </thead>
    <tbody
      class="profile-table-body"
    />
  </table>
  <table
    class="profile-rocket-container"
  >
    <thead>
      <tr>
        <th
          class="table-heading"
        >
          <h2
            class="h2"
          >
            Rockets
          </h2>
        </th>
      </tr>
    </thead>
    <tbody />
  </table>
</section>
`);
          });

                test('render Rockets', () => {
                  const { container, getByText } = render(
                    <MemoryRouter>
                        <Provider store={store}>
                        <Rocket />
                        </Provider>
                    </MemoryRouter>,
                  )
                  expect(container.firstChild).toMatchInlineSnapshot(`
<ul
  class="rocket-container"
  data-projection-id="1"
/>
`);
              });
                })