const GET_API = 'data/missions/GET_API';

export const getAPI = (playload) => ({
  type: GET_API,
  playload,
});

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.playload];
    default:
      return state;
  }
};

export default missionReducer;
