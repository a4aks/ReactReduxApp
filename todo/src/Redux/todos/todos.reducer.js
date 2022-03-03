import { initialState } from "./todos.constants";
import {
  ADD_TODO,
  DELETE_TODO,
} from "./todos.actionType";

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // todos
    case ADD_TODO: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== payload),
      };
    }
    default:
      return state;
  }
};

export { todosReducer };
