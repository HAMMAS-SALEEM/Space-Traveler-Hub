const GET_API = 'data/missions/GET_API';
const JOIN_MISSION = 'data/mission/JOIN_MISSION';

export const getAPI = (payload) => ({
  type: GET_API,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.payload];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionReducer;
