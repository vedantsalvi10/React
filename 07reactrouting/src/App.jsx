import { useState } from 'react'
import {Bottom, Header} from './components/input.js'
import { Outlet } from "react-router";
function App() {
 

  return (
    <>
    <Header />
      <Outlet />
    <Bottom />
    </>
  )
}

export default App
