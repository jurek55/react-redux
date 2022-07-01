import React from 'react';
import { INCREASE, DECREASE, RESET } from '../actions/appActions';

const initialState = { value: 0 };
export const appReducer = (state = initialState, action) => {
  console.log(state, 'state');
  switch (action.type) {
    case INCREASE:
      return { ...state, value: state.value + 1 };
    case DECREASE:
      return { ...state, value: state.value - 1 };
    case RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
};
