import React, { useState } from "react";
import { useEffect} from "react";
import { Container, PostCard } from "../components/initial.js";
import appwriteService from "../appwrite/config";
export function AllPosts(){
  const [posts,setPosts] = useState([]);
  useEffect(()=>{},[])
  appwriteService.viewPost([]).then((posts)=>{
    if(posts){
      setPosts(posts.documents);
    }
  })
return (
  <div className='w-full py-8'>
  <Container>
      <div className='flex flex-wrap'>
            {posts.map((post)=> (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            ))}
      </div>
  </Container>
  </div>
)
}