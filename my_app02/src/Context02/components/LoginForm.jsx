import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// LoginForm 컴포넌트 정의
export default function LoginForm(){
    // AuthContext에서 user, login 데이터 가져옴
    const {user, login, loginInput, setLoginInput} = useContext(AuthContext)
    
    // const [username, setUsername]=useState('')

    // 폼 제출시 실행되는 함수
    // form => submit 
    console.log('현재 로그인 입력값', loginInput)
    const submitHandeler = (e) =>{
        // 기본 폼 제출(새로고침) 막는 코드
        e.preventDefault();
        // 입력 값이 공백이면 alert() 경고창 띄우기
        // 입력 값 검증
        if(loginInput === '' || !loginInput ) return alert('이름을 입력하세요')
        console.log('2번째 로그인 입력값', loginInput)
        // login 함수 실행 -> 전역 상태에 로그인 정보 저장
        login(loginInput)
        
    }
    console.log('3번째 로그인 입력값', loginInput)
    return(
        <div>
            {/* user 존재하면(=로그인이 된 상태) */}
            {user ?(
                <div>
                    {/* 로그인된 사용자 이름 출력해야 한다. */}
                    <p>{user}님, 로그인 되었습니다.</p>
                    {/* profile 링크 */}
                    <Link to='/profile'>
                       <button type="button">프로필로 이동</button>
                    </Link>
                </div>
            ):(
                // user가 없으면(=로그인 안 된 상태) 로그인 폼을 보여줌
                <form onSubmit={submitHandeler}>
                   <h1>로그인</h1>
                   {/* 사용자 이름 입력하는 input  */}
                   <input type="text" 
                   placeholder="이름 입력" 
                   value={loginInput} 
                   onChange={(e)=>setLoginInput(e.target.value)} />

                   {/* 로그인 버튼 => 클릭하면 submitHandeler 실행 */}
                   <button type="submit">로그인</button>
                </form> 
            )}
        </div>
    )
}