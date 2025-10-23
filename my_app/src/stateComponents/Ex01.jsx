
// useState import함
import React,{useState} from "react"
export default function Exstate01(){
    // useState() 변수 지정한다.
    // toggle = '안녕하세요'
    const [toggle, setToggle] = useState('안녕하세요')
    // toggle로 비교한 후 -> 비교 결과를 setToggle()
    // setToggle(연산 또는 비교 작업)

    return(
        <>
           <p>{toggle}</p>
           <button onClick={() => {
            //   setToggle로 변경되는 부분 코드
            //  Hello -> 안녕하세요 => 삼항 연산자.
            setToggle(toggle==='안녕하세요'?'Hello':'안녕하세요') 
           }}>Toggle</button>
        </>
    )
}