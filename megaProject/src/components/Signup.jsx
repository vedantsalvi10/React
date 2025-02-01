import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/AuthService.js";
import { Input,Logo,Button } from "./initial.js";
import { login } from "../store/auth.js";

export const Signup = ()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error,setError] = useState("")
  const {register,handleSubmit} = useForm();

  const create = async (data)=>{
    setError("")
    try{
      const userData = await authService.createAccount(data);
      if(userData){
        const showData = await authService.checkAccount(userData);
        if(showData) dispatch(login(showData));
        navigate("/");
      }
    }catch(error){
      setError(error.message);
    }
  }

  return(
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                  <div className='space-y-5'>
                     <Input 
                     label = "Name: "
                     type="text"
                     placeholder="Enter your full name"
                     {...register("name",{
                      required:true
                     })}
                     />
                     <Input 
                     label = "Email: "
                     type="email"
                     placeholder="Enter your email"
                     {...register("email",{
                      required:true,
                      validate: {
                        matchPattern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "ENTER VALID EMAIL ID"
                      }
                     })}
                     />
                     <Input 
                     label = "Password: "
                     type="password"
                     placeholder="Enter your password"
                     {...register("password",{
                      required:true
                     })}
                     />
                     <Button ttype="submit" className="w-full">
                      Sign up
                     </Button>
                  </div>
                </form>
                </div>
                </div>
  )
}