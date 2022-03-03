
import { USER_LOGIN, USER_LOGOUT } from "./auth.actionType";


export const login = () =>({
    type:USER_LOGIN,
});
export const logout = () =>({
    type:USER_LOGOUT,
});