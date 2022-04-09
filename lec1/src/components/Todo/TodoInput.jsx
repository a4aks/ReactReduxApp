import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/action";


export const TodoInput = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () =>{
    const payload = {
        id:uuid(),
        name,
        status:false,
    };
    dispatch(addTodo(payload));
    setName("");
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Add Todo Value"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
