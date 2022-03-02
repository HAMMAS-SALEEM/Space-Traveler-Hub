import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { getAPI, joinRocket } from '../Redux/Rocket/rocket';
import './stylesheets/rocket.css';

const Mission = () => {
  const store = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  const joinRocketHandler = (e) => {
    const { id } = e.target;
    dispatch(joinRocket(id));
  };
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
          <ul className="rocket-contents">
            <li>
              <img
                src={rocket.flickr_images[0]}
                alt="rocket"
                className="rocket-image"
              />
            </li>
            <li className="rocket-details">
              <ul>
                <li>
                  <h2 className="rocket-name">{rocket.rocket_name}</h2>
                </li>
                <li>
                  <p className="rocket-description">
                    {rocket.reserved ? <span className="reserve-badge">Reserved</span> : ''}
                    {rocket.description}
                  </p>
                </li>
                <li>
                  <button
                    id={rocket.id}
                    type="button"
                    onClick={joinRocketHandler}
                    className={rocket.reserved ? 'cancel-reservation-btn' : 'reserve-btn'}
                  >
                    {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                  </button>

                </li>
              </ul>
            </li>
          </ul>
        </li>
      ))}
    </motion.ul>
  );
};
export default Mission;
