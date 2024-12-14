import { useState } from 'react'


function App() {
  const [color, setcolor] = useState('green')

  let black = ()=>{
      setcolor('black')
  }
  let blue = ()=>{
    setcolor('blue')
  }
  let yellow = ()=>{
    setcolor('yellow')
  }
  let red = ()=>{
    setcolor('red')
  }
  let green = ()=>{
    setcolor('green')
  }
  return (
    <>
      <div className=' w-full h-screen duration-200' style={{backgroundColor: color}}></div>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg ' >
         <button onClick={black} className="bg-black text-white p-2 rounded-xl ">
          Black
        </button>
        <button onClick={blue}  className="bg-blue-500 text-white p-2 rounded-xl ">
          blue
        </button>
        <button onClick={yellow} className="bg-yellow-500 text-white p-2 rounded-xl ">
          yellow
        </button>
        <button onClick={red} className="bg-red-500 text-white p-2 rounded-xl  ">
          red
        </button>
        <button onClick={green} className="bg-green-500 text-white p-2 rounded-xl  ">
          green
        </button> 
        </div>
        </div>
      
    </>
  )
}

export default App
