import { useState, useEffect } from "react";

export default function Exj01(){
// 1. 상태변수 유무 생각
// 2. useEffect를 어디 사용할 건지
// 3. UI 어떻게 출력할 건지 생각
// 4. 컴포너트 분리 유무도 생각
// 5. JSON을 이용해 데이터를 가져오기 해야하는 상황도 고려
// userId 파라미터 상태를 저장하는 변수 필요
// 6. 상태변수를 사용하는 경우 useState(초기값)을 고려
const [userId, setUserId]=useState(1)
// user를 userId에 해당하는 부분만 출력되도록 물어보는
// 상태변수 필요 => 모달에 해당 
//  user = true => 화면에 출력
//  user = false => null
const [user, setUser] = useState(true)
// 배열 => 여러개의 지료를 저장한다.
// 여러개의 자료가 반복되며 출력되어야 하므로
// 기본 반복문으로 출력하는게 정석이다. map()
// const [user1, setUser1] = useState([]) 

// JSON의 데이터 받은 부분을 함수로 정의
const JSONdata = () =>{
   let dataArray = []
      // JSON의 URL부분의 파람터 형식으로 userId 가져온다.
    // 사용방법 ~/user/${userId}
    //  https://jsonplaceholder.typicode.com/users/3
   for(let i=1;i<10; i++){
      //  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      dataArray.push( fetch(`https://jsonplaceholder.typicode.com/users/${i}`))
   }   
    // res의 원문 response(요청하다)객체 이미 React에 존재한다.
    // res 줄임말 약속 같은 의미
    Promise.all(dataArray)
   //  .then((res) => res.json()) //JSON 파싱(해석)
    // data: res.json() 넘겨준 데이터를 말함
    .then((responses)=> { return Promise.all(responses.map((res) => res.json()));})
    .then((data)=>{
        setUser(data)
        console.log(data)
    })
    // JSON에서 가져오는 데이터가 실패하든 성공하든 상관없이 무조건 출력
    .finally(() => {
       console.log('요청 완료')
    })
    
}

// useEffect를 이용해서 JSON 데이터 받기
useEffect(()=>{
   JSONdata()
},[userId])

// userId를 증가시키는 함수
// 핸들러함수란 : 본인혼자는 아무것도 할 수 없는 함수
// 누군가 이벤트로 핸들러함수를 사용해야 비로소 실행되는 함수
const idCountHandeler =() => {
    setUserId(userId+1)
}

//    화면 그리기
 return(
     <div>
        <h2>현재 선택된 사용자 ID : {userId}</h2>
        <button type="button" onClick={idCountHandeler}>다음 사용자 보기</button>
        {/* user가 값이 존재하면 <div>태그를 랜더로 그리기 */}
        {/* user가 값이 null  <div>태그를 그리지 않는다. */}
        {user && 
           <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
           </div>
        }
     </div>
 )
}