// useState() 훅(hook)를 import한다.
import React,{useState} from 'react'

// 한번 함수생성하면서 Export까지 완성
export default function Counter02(){
  console.log("1.컴포넌트 마운트됨 - 함수 실행 됨")
//    useState()훅 이용하여 변수 지정
//  const [이름, set이름] = useState(초기값)
    const [count, setCount] = useState(0) //초기값 0지정
    console.log("2 useState 호출됨 - 초기값 0",count)
    // 함수로 작성하기 : count되는 함수

    console.log("3, 초기 랜더링 중... 화면에 count 표시 됨")

    function inCrease(){
        setCount(count + 1)
    }

    return(
        <>
          <div>
            <p>카운트:{count}</p>
            {/* onClick="count()" */}
            <button onClick={() => {
              console.log("4. 이벤트 발행 - setCount가 실행 요청 ")
              setCount(count + 1)
              console.log("5. setCount 호출 후 , 비동기 상태로 대기 중")
              }}>
              
              증가</button>
            
          </div>
        </>
    )

}