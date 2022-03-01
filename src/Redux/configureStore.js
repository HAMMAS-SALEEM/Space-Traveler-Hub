import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionReducer from './Missions/mission';
import rocketReducer from './Rocket/rocket';

const reducer = combineReducers({
  missionReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
