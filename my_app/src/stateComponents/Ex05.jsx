
// useState import함
import React,{useActionState, useState} from "react"
export default function Exstate05(){
   const[imgShow, setImgShow] = useState(true)

   return(
      <>
        <button onClick={()=>setImgShow(!imgShow)}>
         이미지 토를
        </button>
        {imgShow && <img src="/vite.svg" alt="logo" />}
      </>
   )


}