import React from "react"
import appwriteService from "../appwrite/config.js"
import {Link} from "react-router-dom"
export function PostCard({$id,tittle,image}){
  console.log("props: ", tittle);
  return(
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
      <div className='w-full justify-center mb-4'>
        <img src={appwriteService.filePreview(image) }  alt={tittle} className='rounded-xl'/>
      </div>
      <h2 className='text-xl font-bold'>{tittle}</h2>
    </div>
    </Link>
  )
}