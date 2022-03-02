import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, joinMission } from '../Redux/Missions/mission';
import './stylesheets/mission.css';

const Mission = () => {
  const store = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  const joinMissionHandler = (e) => {
    const { id } = e.target;
    dispatch(joinMission({ id }));
  };

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((json) => {
        if (store.length === 0) {
          dispatch(getAPI(json));
        }
      });
  }, []);
  return (
    <motion.table layout className="mission-container">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      {store.map((mission) => (
        <tbody key={mission.mission_id}>
          <tr className="mission-piece">
            <td className="mission-name"><h2>{mission.mission_name}</h2></td>
            <td className="mission-description">{mission.description}</td>
            <td><button type="button" disabled>{mission.reserved ? 'Active Member' : 'Not A Member'}</button></td>
            <td>
              <button
                type="button"
                onClick={joinMissionHandler}
                id={mission.mission_id}
              >
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>

        </tbody>
      ))}
    </motion.table>
  );
};
export default Mission;
