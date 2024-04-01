import React from "react";

const Todo = ({ todo, deleteTodo, completeTodo }) => {

  const done = (
    <div>
      <span>Is done</span>
      <span>
        <button onClick = {deleteTodo()}>Delete</button> 
      </span>
    </div>
  )

  const notDone = (
    <div>
      <span>Not done yet</span>
        <button onClick = {completeTodo()}>Set as done</button>
        <button onClick = {deleteTodo()}>Delete</button>
    </div>
  )

  return (
    <div
      style = {{
        display: 'flex',
        justifyContent: 'space-evenly',
        maxWidth: '70%',
        margin: 'auto'
      }}
    >
      <span>{todo.text}</span>
      <span>{todo.done ? done : notDone}</span>
    </div>
  )
}

export default Todo;