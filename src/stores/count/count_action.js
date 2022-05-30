import * as types from "./count_type";

export const increaseCount = (x) => {
  return {
    type: types.INCREASE_COUNT,
    payload: x,
  };
};

export const decreaseCount = (x) => {
  return {
    type: types.DECREASE_COUNT,
    payload: x,
  };
};
export const resetCount = () => {
  return {
    type: types.RESET_COUNT,
  };
};
