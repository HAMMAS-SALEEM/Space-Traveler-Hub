import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rocket = useSelector((state) => state.rocketReducer);
  const mission = useSelector((state) => state.missionReducer);
  return (
    <section className="nav-container">
      <ul className="rocket-container">
        {rocket.map(
          <li>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
        )}
      </ul>
      <ul className="rocket-container">
        {mission.map(
          <li>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Profile;
