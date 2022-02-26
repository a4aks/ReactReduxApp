import { updateValue } from "../utils/localstorage";
import {
  ADD_TODO,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  DELETE_TODO,
  USER_LOGIN,
  USER_LOGOUT,
} from "./actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== payload),
      };
    }
    case USER_LOGIN: {
      let userToken = "ABCD";
      updateValue("userTokken",userToken);
      return {
        ...state,
        auth: {
          ...state.auth,
          isUserLoggedIn: true,
          userToken: userToken,
        },
      };
    }
    case USER_LOGOUT: {
        updateValue("userTokken","");
        return {
          ...state,
          auth: {
            ...state.auth,
            isUserLoggedIn: false,
            userToken: "",
          },
        };
      }
    default:
      return state;
  }
};

export { reducer };
