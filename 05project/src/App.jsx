import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(15)
  const[number, setnumber] = useState(false)
  const[character,setcharacter] = useState(false)
  const [password,setpassword] = useState("")
//useref hook
const passwordRef = useRef(null);

  let passwordGenerator = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqristuvwxyz';
    let pass = '';
    if(number) str += '1234567890'
    if(character) str += '~!@#$%^&*()_+{}/`[];'
    for (let i = 1; i <= length ;i++) {
    let char =Math.floor(Math.random()* str.length + 1);
      pass +=  str.charAt(char);
    
   }
   setpassword(pass)
  },[length,number,character,setpassword]
) 
  const CopyPasswordToClipboard = useCallback(()=>{
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,999);
     window.navigator.clipboard.writeText(password)
    },[password]) 
  useEffect(()=>{
    passwordGenerator()
  },[length,number,character])
  return (
    <>
    <div className='flex flex-wrap justify-center w-full h-screen bg-gray-500'>
      <div className='fixed w-full max-w-md mx-auto shadow-md 
                     rounded-lg px-4 py-3 top-10 bg-gray-800'>
      
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          placeholder='password' 
          ref={passwordRef}
          value={password}
          readOnly 
          className='outline-none w-full py-1 px-3'
          />
          <button 
           onClick={CopyPasswordToClipboard}
          className='outline-none bg-purple-500 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>  
        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>            
        <input 
        type="range" 
        min={6}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(Number(e.target.value))}}/>
        <label className='text-white mr-4'>Length: {length}</label>
        </div>
        <input 
        type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={()=>{setnumber((prev)=>!prev
        )}}/>
        <label htmlFor='numberInput' className='text-white mr-4'>Number</label>
        <input 
        type="checkbox" 
        defaultChecked={character}
        onChange={()=>{setcharacter((prev)=>!prev)}}/>
        <label className='text-white'>Character</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App