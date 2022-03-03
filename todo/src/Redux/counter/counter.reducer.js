import { initialState } from "./counter.constants";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
} from "./counter.actionType";

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    default:
      return state;
  }
};

export { counterReducer };
