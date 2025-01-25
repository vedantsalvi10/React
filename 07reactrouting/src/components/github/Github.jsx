import React from "react";
import { useState, useEffect } from "react";

export function Github() {
  const [data,setdata] = useState({})
  useEffect(()=>{
    fetch('https://api.github.com/users/vedantsalvi10')
    .then((response)=>response.json())
    .then((response)=>setdata(response))
    console.log(data)
  },[])
  return (
    <>
    <div className="flex felx-wrap justify-center align-center p-8 text-center text-3xl ">
      <img src={data.avatar_url} alt="" />
      <h2 className="pl-4">
        Github followers: {data.followers}
      </h2>
    </div>
    </>
  );
}
