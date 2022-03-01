import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI } from '../Redux/Missions/mission';

const Mission = () => {
  const store = useSelector(((state) => state.missionReducer));
  const dispatch = useDispatch();
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
    <ul className="rocket-container">
      {store.map((mission) => (
        <li key={mission.mission_id}>
          <ul>
            <li>{mission.mission_name}</li>
            <li>{mission.description}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
export default Mission;
