import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList' 

function App() {
  const [count, setCount] = useState(0)

  return (
    // https://rootstack.com/es/blog/como-uso-arrastrar-y-soltar-con-react   Probar otras opciones
    <>
      <TodoList />
    </>
  )
}

export default App
