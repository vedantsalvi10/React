import React from "react"
import { TodoForm, TodoItem } from "./components"
import { TodoProvider } from "./context/context"
import { useEffect } from "react"

function App() {
  const [todos,setTodos] = React.useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [...prev, todo]);
  }
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? updatedTodo : prevtodo))
    );
  };
  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=> prevtodo.id !== id))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo,completed:!prevtodo.completed}:prevtodo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length)
      setTodos(todos)
  },[])
  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <>
    < TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo) => (
                         <div key={todo.id}>
                         <TodoItem todo={todo} />
    </div>
  ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
  )
}

export default App
