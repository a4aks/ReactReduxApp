import React from "react";
import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";

export const Todos = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo todo ={todo}/>
          </div>
        );
      })}
    </div>
  );
};
