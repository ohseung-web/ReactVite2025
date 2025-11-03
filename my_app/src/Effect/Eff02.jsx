import { useEffect, useState } from "react";

export default function Eff02(){
   const[count, setCount]=useState(0)

    // Effect의 의존성배열을 지정하지 않고 작성 
    // => 랜더링 될때마다 useEffect가 실행됨
    useEffect(() =>{
        console.log('랜더링 발생')
    })
    return (
      <div>
         <p>카운트</p>
         <button type="button" onClick={()=>setCount(count+1)}>+1</button>
      </div>
    )
}