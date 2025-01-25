import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from './components/Home/Home.jsx'
import {About} from './components/about/About.jsx'
import {Info} from './components/contact/Info.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Github } from './components/github/Github.jsx'
import { User } from './components/user/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} >
       <Route path='home' element={<Home />}/>
       <Route path='about' element={<About />}/>
       <Route path='contact' element={<Info />}/>
       <Route path='github' element={<Github/>} />
       <Route path='user/:userid' element={<User />} />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
