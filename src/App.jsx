import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './app/Componnets/Todo'
import AddTodo from './app/Componnets/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center'>
  <AddTodo/></div>
  <Todo/>
    </>
  )
}

export default App
