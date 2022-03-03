import axios from "axios";
import { v4 } from "uuid";
import { addTodoRequest, addTodoSuccess, addTodoError } from "./todos.action";
import { DELETE_TODO_ERROR, DELETE_TODO_REQUEST } from "./todos.actionType";
import {getTodoRequest,getTodoSuccess,getTodoError} from "./todos.action";

export const getTodo = (value) => (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .post("http://localhost:3000/todos")
    .then((r) => {
      console.log(r.data);
      dispatch(getTodoSuccess(r.data));
    })
    .catch((error) => {
      dispatch(getTodoError(error));
      console.log(error);
    });
};

export const addTodo = (value) => (dispatch) => {
  dispatch(addTodoRequest());
  axios
    .post("http://localhost:3000/todos", {
      value: value,
    })
    .then((r) => {
      console.log(r.data);
      dispatch(addTodoSuccess(r.data));
    })
    .catch((error) => {
      dispatch(addTodoError(error));
      console.log(error);
    });
};

export const deletetodo = (todoId) => (dispatch) => ({
  type: DELETE_TODO_ERROR,
  payload: todoId,
});
