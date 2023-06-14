import React from 'react'
import { useState, useEffect } from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {

    let keyLocalStorage = "todos";
    const [inputValue, setInputValue] = useState("")

    const [todosList, setTodos] = useState(() => {
        const getLocalStorageTodos = localStorage.getItem(keyLocalStorage);
        if(getLocalStorageTodos) {
            return JSON.parse(getLocalStorageTodos)
        }else {
            return []
        }
    })

    const deleteTodo = (todoDelete) => {
        const updateTodoList = todosList.filter( (todo) => todo !== todoDelete);
        setTodos(updateTodoList)
    }

    const addTodo = (textTodo) => {
        if (!todosList.includes(textTodo)) {
            setTodos([...todosList, textTodo]);
          }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim()) {
            addTodo(inputValue);
            setInputValue("");
        }
    }

    useEffect( () => {
        localStorage.setItem(keyLocalStorage, JSON.stringify(todosList))
    }, [todosList])

    

  return (
    <div>
        <h1>Lista de tareas pendientes</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Agrega una tarea' onChange={ (event) => 
                setInputValue(event.target.value)
             } value={inputValue}/>
            <button type='submit'>Agregar</button>
        </form>

        <ul>
            {
                todosList.map((todo, idx) => (
                    <TodoItem 
                        key={idx} 
                        todo={todo} 
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList