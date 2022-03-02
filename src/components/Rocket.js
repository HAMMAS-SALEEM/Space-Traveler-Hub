import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI } from '../Redux/Rocket/rocket';

const Mission = () => {
  const store = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((json) => {
        if (store.length === 0) {
          dispatch(getAPI(json));
        }
      });
  }, []);
  return (
    <motion.ul layout className="rocket-container">
      {store.map((rocket) => (
        <li key={rocket.id}>
          <ul>
            <li>
              <h2>{rocket.rocket_name}</h2>
            </li>
            <li>
              <img
                src={rocket.flickr_images[0]}
                alt="rocket"
                className="rocket-image"
              />
            </li>
          </ul>
        </li>
      ))}
    </motion.ul>
  );
};
export default Mission;
