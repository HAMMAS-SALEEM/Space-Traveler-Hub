import React from 'react';
import { useSelector } from 'react-redux';
import './stylesheets/profile.css';

const Profile = () => {
  const mission = useSelector((state) => state.missionReducer);
  const rocket = useSelector((state) => state.rocketReducer);
  return (
    <section className="profile-container">
      <table className="profile-mission-container">

        <thead><tr><th className="table-heading"><h2>Missions</h2></th></tr></thead>
        <tbody className="profile-table-body">
          {mission.map((mission) => {
            if (mission.reserved === true) {
              return (
                <tr key={mission.mission_id}><td>{mission.mission_name}</td></tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <table className="profile-rocket-container">
        <thead><tr><th className="table-heading"><h2>Rockets</h2></th></tr></thead>
        <tbody>
          {rocket.map((rocket) => {
            if (rocket.reserved === true) {
              return (
                <tr key={rocket.rocket_id}><td>{rocket.rocket_name}</td></tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </section>
  );
};
export default Profile;
