import { useEffect, useState } from "react";

export default function Eff08(){
    // 사용자의 목록을 담을 변수
    const[user, setUser]=useState([])
    // reload : 버튼 클릭으로 새로고침(재요청) 제어할 상태 변수
    const[reload, setReload] = useState(false);
    // isLoad : 데이터를 불러오는 중인지 여부를 확인할 상태 변수
    // 로딩중.....
    const[isLoad, setIsLoad]=useState(false);


    useEffect(() => {
      // 로딩 시작 상태 변경
           fetch("https://jsonplaceholder.typicode.com/users")
          // 2. 서버에서 응답(Response)을 받으면 JSON으로 변환
          .then(res => res.json())
          // 3. 변환한 데이터를 setUser()로 상태 변환하여 저장
          .then(data => 
            // 가저온 데이터를 user 상태에 저장
            setUser(data)
            // 로딩 완료 상태로 변경
            // 로딩중...이 출력되면 안되기에 false로 상태 업데이트
            // setIsLoad(false);}
          ) 
      setTimeout(() => {
           setIsLoad(true) 
           setIsLoad(false)     
      }, 5000);
      
    },[reload]) // reload 값이 바뀔때마다 useEffect 재실행
                // 다시말해, reload가 변경될 때마다 데이터를 다시 불러옴
    
    
    return(
        <div>
          {/* 버튼 클릭시 reload 상태를 반전 시켜 useEffect 재실행 유도 */}
          <button type="button" 
          // reload 값  true <-> false
          // isLoad 시작되야 하므로 :  true
          onClick={()=>{setReload(!reload); setIsLoad(true);}}
          >다시불러오기</button>
          {/* 로딩중이면 '로딩중....' 문구 표시, 아니면 사용자 목록추력 */}
          {isLoad ? <p>로딩중...</p>:
            <ul>
              {user.map((user)=>( <li key={user.id}>{user.name}</li>))}
            </ul>
          }
        </div>
    )
}