import { updateValue } from "../../utils/localstorage";
import {
  USER_LOGIN,
  USER_LOGOUT,
} from "./auth.actionType";
import { initialState } from "./auth.constants";

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    // Auth
    case USER_LOGIN: {
      let userToken = "ABCD";
      updateValue("userTokken",userToken);
      return {
        ...state,
          isUserLoggedIn: true,
          userToken: userToken,
      };
    }
    case USER_LOGOUT: {
        updateValue("userTokken","");
        return {
          ...state,
            isUserLoggedIn: false,
            userToken: "",
        };
      }
    default:
      return state;
  }
};

export { authReducer };
