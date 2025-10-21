// useState() 훅(hook)를 import한다.
import React,{useState} from 'react'

// 한번 함수생성하면서 Export까지 완성
export default function Counter02(){
//    useState()훅 이용하여 변수 지정
//  const [이름, set이름] = useState(초기값)
    const [count, setCount] = useState() //초기값 0지정
    
    // 함수로 작성하기 : count되는 함수
    function inCrease(){
        setCount(count + 1)
    }

    return(
        <>
          <div>
            <p>카운트:{count}</p>
            {/* onClick="count()" */}
            <button onClick={inCrease}>증가</button>
          </div>
        </>
    )

}