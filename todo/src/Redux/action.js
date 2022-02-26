
import { ADD_TODO, DELETE_TODO, USER_LOGIN, USER_LOGOUT } from "./actionTypes";
import {v4} from "uuid";

export const addTodo =  (value) =>( {
    type:ADD_TODO,
    payload :{
        id : v4(),
        value,
    },
});

export const deletetodo = (todoId) =>({
    type:DELETE_TODO,
    payload:todoId,
});

export const login = () =>({
    type:USER_LOGIN,
});
export const logout = () =>({
    type:USER_LOGOUT,
});