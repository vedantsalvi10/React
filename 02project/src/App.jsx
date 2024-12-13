import {useState} from 'react';

import './App.css'

function App() {

let [counter, updatecounter] = useState(0);
const addvalue = () =>{
  
  if(counter < 20){
    counter += 1;
  updatecounter( counter);
  }
}
const removevalue = ()=>{
  if(counter > 0){
    counter -= 1;
  updatecounter( counter);
  }
}
  return (
    <>
      <h1>Chai aur COde</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addvalue} >Add value</button> 
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
