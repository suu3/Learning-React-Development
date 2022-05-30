import * as types from "./Actiontypes";

export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const setColor = (color: string) => ({
  type: types.SET_COLOR,
  color,
});
