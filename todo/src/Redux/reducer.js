
import { combineReducers } from "redux";
import {todosReducer}  from "./todos/todos.reducer";
import {counterReducer} from "./counter/counter.reducer";
import {authReducer} from "./auth/auth.reducer";

export default combineReducers({
    todos: todosReducer,
    counter: counterReducer,
    auth:authReducer,
})