import { useState, createContext } from "react";
// 1] Context  생성
// -createContext()는 React의 전역 저장소(공유 공간)를 만드는 함수이다.
// -컴포넌트 트리 전체에 데이터를 전달할 수 있게 해준다.
// 반드시 export 해야 함수를 내볼 수 있다.
export const AuthContext = createContext();

// 2]Provider  정의한다
// - AuthContext 컴포넌트는 Context의 '공급자(Provider)'역할을 한다
// - App 전체를 감싸서 user, login, logout 데이터를 전역으로 전달
// - value={{데이터1, 데이터2}}에 값을 싫어 나른다.
// Provider를 할 수 있는 함수를 생성한다.
export default function AuthProvider({children}){
//   상태 변수 user : 현재 로그인한 사용자 정보 저장
//   기본 값은 null -> 아직 로그인하지 않은 상태
//   기본 값은 => input에 입력할 때 빈값은 입력금지 alert()창으로
//               예외처리 또는 방어코드 작성한다.
      const [user, setUser] = useState(null)

    //   이전 코드에 없는 코드 추가 부분
      // 로그인 폼의 입력값을 전역으로 관리
      const [loginInput, setLoginInput] = useState("");
 
    //  로그인 함수 login() : 사용자 이름을 받아  user 객체로 저장
     // 로그인 함수: 전달받은 이름으로 user를 설정
    const login = (username) =>{
         if(username !== null || username !== '') return; 
        //   setUser({name : username})
          setUser(username);
        //   로그인 폼의 입력 값을 초기화
          setLoginInput('')
    }

    // 로그아웃 함수 logout : user를 null로 초기화 (로그아웃=로그인 해제)
    const logout = () =>{
        setUser(null)
    }

    // Provider는 value 속성을 통해 하위 컴포넌트에 데이터를 공유
    // children은 <AuthProvider> ~~~ </AuthProvider> 안의
    // 포함된 컴포넌트를 의미한다.
    return(
        <AuthContext.Provider value={{user, login, logout ,setUser, loginInput, setLoginInput}}>
            {children}
        </AuthContext.Provider>
    )  
}  