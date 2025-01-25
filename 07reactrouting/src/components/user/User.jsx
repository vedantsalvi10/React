import React from "react";
import { useParams } from "react-router";

export function User(){
  const {userid} = useParams()
  return(
    <h2 className="text-center text-3xl p-8">UserId:{userid} </h2>
  )
}