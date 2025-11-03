import { useEffect, useState } from "react";



export default function Eff05(){
    //  time의 용도 => 시간 누적 => setTime(time + 1)
    const[time,setTime]=useState(0)

    // 의존성 배열을 사용하지 않은 이유는 초는 계속 랜더링되면서 변경되어야 하기때문에
    useEffect(() =>{
      const timer = setInterval(() => setTime(time+1),1000)
      // clearnUp 함수 필요
      return () => clearInterval(timer)
    })

    return(
      <div>
         {time}초 경과
      </div>
    )
}