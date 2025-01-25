import { useEffect, useState } from 'react'

import './App.css'
import { Card } from './components/Card.jsx'
import { ThemeBtn } from './components/ThemeBtn.jsx'
import { ContextProvider } from './context/Context.js';

function App() {
 const [themeMode,setThemeMode] = useState("light")
 const lightMode = ()=>{setThemeMode("light")}
const darkMode = ()=>{setThemeMode("dark")}
 useEffect(()=>{
   document.querySelector('html').classList.remove("light","dark")
   document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
    <ContextProvider value={{themeMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
            </ContextProvider>
    </>
  )
}

export default App
