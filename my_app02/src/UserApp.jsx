import {useState} from 'react'
// 내가만든 데이터 저장소 import 한다.
import { UserContext } from './Context/UserContext'
import Header from './Context/component/Header'

// 부모 컴포넌트 , 공유하고 데이터를 상태변수로 지정
export default function UserApp(){
    // useState 이름 저장
    // 전역변수
    const [username, setUsername]=useState('홍길동')
    
    console.log('UserContext.Provider에 전달될 값',{username,setUsername});

    // provider로 감싸서 전역의 데이터 값을 전달한다.
    return(
        <UserContext.Provider value={{username, setUsername}}>
            <div>
                <h2>Context API 기본예제</h2>
                <Header />
            </div>
        </UserContext.Provider>
    )
}