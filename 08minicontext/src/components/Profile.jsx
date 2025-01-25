import React, {useState,useContext} from "react";
import UserContext from "../context/UserContext.js";

export function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    // Render this when user is null or undefined
    return <h2>Please log in</h2>;
  }

  // Render this when user exists
  return (
    <div>
      <h2>Name: {user.username}</h2>
    </div>
  );
}