// action types
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";


export const USER_LOGOUT = "USER_LOGOUT";
// action creator
// function which creates action object.

export const loginRequest = () =>({
    type:USER_LOGIN_REQUEST,
})

export const loginSuccess = (payload) =>({
    type:USER_LOGIN_SUCCESS,
    payload,
})

export const loginError = (error) =>({
    type:USER_LOGIN_ERROR,
    payload:error,
})

export const logout = () =>({
    type:USER_LOGOUT,
});