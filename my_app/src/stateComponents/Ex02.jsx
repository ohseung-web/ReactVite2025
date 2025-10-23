
// useState import함
import React,{useActionState, useState} from "react"
export default function Exstate02(){
   // input 의 onChange()함수 이용해 작성
//    element.target.value = e.target.value
// => input 입력한 값을 가저올 수 있다.
   const [text, setText] = useState('')
//    업데이트 용 함수 생성
   const ChangeText = (e) =>{
    //  update는 setText(연산)
    setText(e.target.value)
   }
   return(
     <>
        <input onChange={ChangeText} placeholder="입력하세요" />
        <p>입력 : {text}</p>
     </>
   )

}