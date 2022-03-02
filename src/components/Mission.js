import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, joinMission } from '../Redux/Missions/mission';

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
    <motion.ul layout className="mission-container">
      {store.map((mission) => (
        <li key={mission.mission_id} className="mission-piece">
          <ul>
            <li><h2>{mission.mission_name}</h2></li>
            <li>{mission.description}</li>
            <button
              type="button"
              onClick={joinMissionHandler}
              id={mission.mission_id}
            >
              Join Mission
            </button>
          </ul>

        </li>
      ))}
    </motion.ul>
  );
};
export default Mission;
