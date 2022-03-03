import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import { addTodo } from "../Redux/todos/todos.api";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h3>ADD TODO</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button onClick={() =>{
          dispatch(addTodo(title));
          setTitle("");
      }}>ADD</button>
    </div>
  );
};
