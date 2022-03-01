const GET_API = 'data/rockets/GET_API';
export const getAPI = (playload) => ({
  type: GET_API,
  playload,
});
const initialState = [];
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.playload];
    default:
      return state;
  }
};
export default rocketReducer;
