const GET_API = 'data/rockets/GET_API';
const JOIN_ROCKET = 'data/rockets/JOIN_ROCKET';

export const getAPI = (playload) => ({
  type: GET_API,
  playload,
});

export const joinRocket = (payload) => ({
  type: JOIN_ROCKET,
  payload,
});

const initialState = [];
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.playload];
    case JOIN_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === +action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
    default:
      return state;
  }
};
export default rocketReducer;
