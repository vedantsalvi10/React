import React from 'react';
import authService from './appwrite/AuthService.js';
import { authentication, login, logout } from './store/auth.js';
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react';
import { Outlet } from "react-router";
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
const [loading,setLoading] = useState(true)
const dispatch = useDispatch();
useEffect(()=>{
authService.checkAccount().then(
  (userData)=>{
    if(userData){
       dispatch(login(userData));
    }else{
      dispatch(logout());
    }
}).finally(
  setLoading(false)
  );
},[])
  
return !loading ? (
  <div>
    <Header />
    <main>
     Todo: {/* <Outlet /> */}
    </main>
    <Footer />
  </div>
) : null;
}

export default App
