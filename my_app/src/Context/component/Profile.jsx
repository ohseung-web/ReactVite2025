import { UserContext } from "../userContext";
import { useContext } from "react";

export default function Profile(){
    // useContext로 값 사용
    const {username, setUsername} = useContext(UserContext)
    return(
        <div>
            <p>현재 사용자 :{username}</p>
            <button type="button" onClick={()=>setUsername('이순신')}>이름 바꾸기</button>
        </div>
    )
}