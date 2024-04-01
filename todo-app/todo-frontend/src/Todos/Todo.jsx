import React from "react";

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <span>{todo.done}</span>
    </div>
  )
}

export default Todo;