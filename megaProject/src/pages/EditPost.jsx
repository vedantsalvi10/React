import React, { useState } from "react";
import { Container, PostForm } from "../components/initial.js";
import appwriteService from "../appwrite/config.js";
import { useNavigate, useParams } from "react-router-dom";

export function EditPost(){
  const {slug} = useParams()
  const navigate= useNavigate()
  const [post,setPost] = useState()

  useEffect(()=>{
   if(slug){
    appwriteService.getPost(slug).then((post)=>{
      if(post){
        setPost(post);
      }
      else{
        navigate("/")
      }
    })
   }
  },[slug,navigate])

  return post ? (
    <div className="py-8">
    <Container>
      <PostForm post={post} />
    </Container>
    </div>
  ) : null;
}