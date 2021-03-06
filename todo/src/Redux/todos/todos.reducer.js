import { initialState } from "./todos.constants";
import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  DELETE_TODO_REQUEST,
} from "./todos.actionType";

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_REQUEST: {
      return { ...state, isLoading: true, error: false };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: payload,
      };
    }
    case GET_TODO_ERROR: {
      return { ...state, isLoading: false, error: true };
    }
    // todos
    case ADD_TODO_REQUEST: {
      return { ...state, isLoading: true, error: false };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: [...state.data, payload],
      };
    }
    case ADD_TODO_ERROR: {
      return { ...state, isLoading: false, error: true };
    }
    case DELETE_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: state.data.filter((todo) => todo.id !== payload),
      };
    }
    case DELETE_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
export { todosReducer };
