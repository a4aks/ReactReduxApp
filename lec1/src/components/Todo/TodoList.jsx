import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    console.log("todos",todos);
  return (
    <div>
        {todos.map((item) =>(
            <h3 key = {item.id}>{item.name}
             <button>Delete</button>
            </h3>
           
        ))}
    </div>
  )
}
