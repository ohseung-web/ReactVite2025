import { useState, useEffect } from "react";

export default function Ex03(){
    // count 상태를 변경하는 변수
    const [count, setCount]=useState(0)
    // 의존성 배열에 count를 추가하여 생성
    useEffect(()=>{
         console.log(`현재 카운트 ${count}`)
    },[count])
    
    // [-]핸들러
    const minuHandeler = () =>{
        setCount(count-1);
    }
    // [+]핸들러
    const plusHandeler = () =>{
        setCount(count+1);
    }
    return(
        <div>
            <h2>Counter with useEffect</h2>
            <div>{count}</div>
            <button type="button" onClick={minuHandeler}>-</button>
            <button type="button" onClick={plusHandeler}>+</button>
            <p>콘솔을 확인하세요! 카운터가 변경될때마다 로그가 출력됩니다.</p> 

        </div>
    )
    
}