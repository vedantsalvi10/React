import React from "react";

export function Button(
  {
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-White",
    className = "",
    ...props
  }
){

  return(
      <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`}{...props}>
       {children}
      </button>
  )
}