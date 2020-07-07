import { INCREMENT, DECREMENT } from "./counterReducerType";

export const counterState = {
  count: 0,
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
