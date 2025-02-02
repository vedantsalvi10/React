import React, { useState } from "react";
import appwriteSevice from "../appwrite/config.js";
import { useEffect } from "react";
import { PostCard } from "../components/initial.js";
import { Container } from "../components/initial.js";
export function Home (){
  const [post,setPost] = useState([]);

  useEffect(()=>{
      appwriteSevice.viewPost().then((post)=>{
        if(post){
            setPost(post.documents);
        }
  })
  },[])
  if(post.length === 0){
    return(
    <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
    )
  }
    return(
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
        {post.map((post)=>(
          <div className='p-2 w-1/4' key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
        </div>
      </Container>
    </div>
    )
  }
  