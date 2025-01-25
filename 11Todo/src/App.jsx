import { useState } from 'react'


import './App.css'
import Todo from './components/Todo.jsx'
import Increment from './components/Increment.jsx'

function App() {


  return (
    <>
     <div>Redux tookit</div>
     <Increment/>
     <Todo />
    </>
  )
}

export default App
