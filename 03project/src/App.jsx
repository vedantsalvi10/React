import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './containers/card'
function App() {
  const [play, setPlay] = useState(false)
  let obj = {
    name:"vedant"
  }
  return (
    
    <>
    <h1 className='bg-purple-500 p-4 rounded-xl mb-5'>Hello Vedant here</h1>
    
    <Card username="vedant" para="this is para number1" /><br /><br /><br />
    <Card username = "siya" para='this is para number 2' />
    
      </>
  )
}

export default App
