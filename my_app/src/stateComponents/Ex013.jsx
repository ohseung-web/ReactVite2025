
// useState import함
import React,{useActionState, useState} from "react"
export default function Exstate13(){
   const[text, setText] = useState(' ')

   return(
      <>
      <input onChange={(e)=>{setText(e.target.value)}} type="text" value={text} />
        <button onClick={()=>setText('')}>
          초기화
        </button>
        <p>{text}</p>
      </>
   )


}