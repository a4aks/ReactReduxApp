import React from 'react'
import { useDispatch } from 'react-redux'
import {deletetodo} from '../Redux/todos/todos.action';

export const Todo = ({todo}) => {

  const dispatch = useDispatch();
  return (
    <div>
      <p>{todo.value}</p>
      <button onClick={() => dispatch(deletetodo(todo.id))}>
        Delete 
      </button>
      </div>
  )
}
