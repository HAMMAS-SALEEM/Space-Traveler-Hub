import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rocket = useSelector((state) => state.rocketReducer);
  const mission = useSelector((state) => state.missionReducer);
  return (
    <section className="nav-container">
      <ul className="mission-container">
        <h2>Missions</h2>
        {mission.map((mission) => {
          if (mission.reserved === true) {
            return (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            );
          }
          return null;
        })}
      </ul>
      <ul className="rocket-container">
        <h2>Rockets</h2>
        {rocket.map((rocket) => {
          if (rocket.reserved === true) {
            return (
              <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
};

export default Profile;
