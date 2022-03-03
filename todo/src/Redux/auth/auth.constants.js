import { getValue } from "../../utils/localstorage";

export const initialState = {
        isUserLoggedIn: getValue("userToken") ? true : false,
        userToken:getValue("userToken")
};

