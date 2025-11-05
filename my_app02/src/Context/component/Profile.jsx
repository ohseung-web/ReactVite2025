// 내가 만든 UserContext를 반드시 import한다
// useContext()훅을 import한다.
//  => 그래야 부모에서 보낸 데이터를 꺼내서 사용할 수 있다.
import { UserContext } from "../UserContext"; // 내가만든 저장소
import { useContext } from "react"; // react 라이브러리 훅이다.

export default function Profile(){
    // useContext 값 꺼내서 사용한다.
    // useContext 값 꺼내서 담을 때는 반드시 {username, setusername} 입력한다.
    const {username, setUsername} = useContext(UserContext)
    
    return(
        <div>
            <p>현재 사용자 : {username}</p>
            <button type="button" onClick={()=>setUsername('개나리')}>이름 바꾸기</button>
        </div>
    )
}