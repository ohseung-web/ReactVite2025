import { useState, useEffect } from "react";

export default function Exj02(){
   //  JSON 에서 받아온 데이터 상태 저장하는 변수
const [data, setData]=useState([])

// JSON 데이터는 처음 1회만 실행하도록
useEffect(()=>{
   // fetch().then().then().catch().finally()
   // 비동기로 네트워크에 접속해서 데이터를 요청한다.
   fetch('https://jsonplaceholder.typicode.com/postss')
   // res(Response(응답)객체의 res.json() 응답 받은 데이터의 파싱(해석))
   .then((res)=> {
      // res.ok => 에러체크 
      // 데이터가 오류 아님 res.ok = true (200 ~ 299)
      // 데이터가 오류이면 res.ok = false
      // HTTP 400/500 에러를 fetch가 잡지 못 하기 때문에
      // res.ok이용해서 error 잡는 것이다.
      // res.ok는 boolean 데이터 타입이다.
      // boolean은 오직 true(참),false(거짓)만 가질 수 있다.
      // res.status 지금 현재 오류 상태가 출력됨
      //  예) 404 Not Found
      if(!res.ok){
          throw new Error(`에러 메시지 ${res.status}`)
      }
      // return res.json() => 파싱
      return res.json()
   })
   .then((data)=>{
      setData(data)
      console.log(data)
   })
   // catch는 res.ok의 에러 체크 부분이 없으면 출력되지 않음
   .catch((err)=>{
        console.log(`오류 : ${err.message}`)
   })
   // 실패/성공 무조건 출력
   .finally(()=>{
      console.log('요청 완료')
   })

},[])



 
}