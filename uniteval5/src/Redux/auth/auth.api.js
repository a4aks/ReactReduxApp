
import axios from "axios";
import {loginRequest , loginSuccess, loginError} from "./auth.action";

export const login = (params) => (dispatch) => {
    dispatch(loginRequest())
    axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", params)
    .then((r) =>{
        console.log(r.token);
        dispatch(loginSuccess(r.token))
    })
    .catch((error) =>{
        dispatch(loginError(error))
        console.log(error);
    });
};