import React from 'react'

const TodoItem = ({todo, deleteTodo}) => {
  return (    
    <li>
        <span>{todo}</span>
        <button onClick={ () => deleteTodo(todo)}>Eliminar</button>
    </li>
  )
}

export default TodoItem