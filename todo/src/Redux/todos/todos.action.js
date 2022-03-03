import { ADD_TODO, DELETE_TODO } from "./todos.actionType";
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