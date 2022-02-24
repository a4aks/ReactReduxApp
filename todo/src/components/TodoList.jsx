import React,{useState} from 'react';

export const TodoList = () => {
    const [title, setTitle] = useState("");
  return (
    <div>
        <h3>ADD TODO</h3>
        <input type ="text" value = {title} onChange={(e) =>setTitle(e.currentTarget.value)}/>
    </div>
  )
}
