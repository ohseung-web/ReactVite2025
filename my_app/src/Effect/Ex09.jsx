import { useState, useEffect } from "react";

export default function Ex09(){
//    입력하는 메시지가 여러개 담기는 상태변수
//  0 => a, 1 => b, 2 => c
const[msg,setMsg] = useState([])
// input 입력을 담는 상태 변수
const[inputText ,setInputText]=useState('')

// useEffect => 메시지 a -> a, b -> b
useEffect(() =>{
  if(msg.length >0){
    //  마지막에 입력된 메시지 출력 시킴
    let lastMsg = msg[msg.length-1]
    console.log('새 메시지 :'+ lastMsg)
  }
},[msg])

// input handeler 함수
const inputHandeler =(e)=>{
    setInputText(e.target.value)
}

// 메시지 전송 함수
const msgSubmit = () =>{
    // 빈 메시지 방지 예외 처리
    if(inputText.trim() === '') return; 
    // 입력받은 메시지 배열에 push
    // 얕은 복사 => 배열, 객체 [{]]
    const msgCopy = [...msg]
    msgCopy.push(inputText)
    setMsg(msgCopy);
    setInputText('') // input 텍스트 입력된 문자를 => 빈텍스트로 리셋
}

   return(
     <div>
        <h2>간단한 메시지 입력기</h2>
        {/* 메시입력 */}
        <input type="text" value={inputText} placeholder="메시지 입력" onChange={inputHandeler}/>
        <button type="button" onClick={msgSubmit}>전송</button>
        {/* 메시지 목록 출력 */}
        
            <ul>
               {msg.map((msg,index) =>(
                 <li key={index}>{msg}</li>
               ))}
            </ul>
        
     </div>
   )

}