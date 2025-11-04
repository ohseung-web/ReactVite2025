import { useState } from "react";
import { UserContext } from "./Context/userContext";
import Header from "./Context/component/Header";

export default function UserApp(){
  const[username, setUsername] = useState("홍길동")
//   provider로 감싸서 전역값 전달
  return(
    <UserContext.Provider value={{username, setUsername}}>
       <div>
          <h2>Context API 기본예제</h2>
          <Header />
       </div>
    </UserContext.Provider>
  )
}