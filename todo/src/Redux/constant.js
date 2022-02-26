import { getValue } from "../utils/localstorage";

export const initialState = {
    count: 1,
    todo:[],
    auth:{
        isUserLoggedIn: getValue("userToken") ? true : false,
        userToken:getValue("userToken")
    },
};

