import React from "react";
import authService from "../../appwrite/AuthService.js";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth.js";

export const Logout =  ()=>{
  const dispacth = useDispatch()
  const handleLogout = ()=>{
    authService.logOUT().then(()=>{
      dispacth(logout())
    }).catch((error)=>console.log("LOGOUT:ERROR: ",error))
  }
  return(
    <button 
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
     onClick={handleLogout}>Log out</button>
  )
}