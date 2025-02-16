import React from "react";
import {Editor} from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form";

export const RTE = ({name, control, label,  defaultValues =""})=>{
  if (!control) {
    console.error(`🚨 Missing 'control' for RTE component: ${name}`);
    return null; // Prevents app from breaking
  }
  return(
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller  
       name = {name || "content"}
       control={control}
       render = {({ field: {onChange} })=>(
        <Editor 
        apiKey="6kt0ps42kewdjrhz98eps5be0aaiwmi7tp8cdvpycgpeqple"
         initialValue={defaultValues}
         init={{
          height:500,
          menubar: true,
          plugins: [
            "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
          ],
          toolbar:"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }
         }
         onEditorChange={onChange}
        />
       )}
       
      />
    </div>
  )
}