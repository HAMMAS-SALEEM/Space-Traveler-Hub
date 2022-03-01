import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, joinMission } from '../Redux/Missions/mission';

const Mission = () => {
  const store = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  const submitMission = (id) => {
    const newState = store.map((rocket) => {
      if (rocket.id !== id) return rocket;
      return { ...rocket, reserved: true };
    });
    dispatch(joinMission(newState));
  };

  const joinMissionHandler = (e) => {
    const { id } = e.target;
    submitMission(id);
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
    <ul className="rocket-container">
      {store.map((mission) => (
        <li key={mission.mission_id}>
          <ul>
            <li>{mission.mission_name}</li>
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
    </ul>
  );
};
export default Mission;
