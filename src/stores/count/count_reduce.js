import * as types from "./count_type";

const defaultState = 0;

const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case types.INCREASE_COUNT:
      return state + action.payload;
    case types.DECREASE_COUNT:
      return state - action.payload;
    case types.RESET_COUNT:
      return 0;
    default:
      return state;
  }
};
export default reduce;
