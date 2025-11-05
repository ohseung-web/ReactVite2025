// Link : 페이지 이동을 위한 React Router 컴포넌트이다.
import {Link} from 'react-router-dom'
// useContext : Context의 값을 가져올 수 있는 React Hook이다.
import { useContext } from 'react'
// AuthContext : 내가 만든 데이터를 가저오기 위한 저장소
import { AuthContext } from '../contexts/AuthContext'

// Header 컴포넌트 정의 (화면 상단 네비게이션 역할)
export default function Header(){
    // useContext(AuthContext)를 통해 전역 상태의 변수를 읽음
    // user  : 현재 로그인 사용자 정보
    // logout : 로그아웃 함수
    const {user,logout} = useContext(AuthContext)

    return(
        <header>
            <h1>Context 인증 실습</h1>
            {/* 홈 링크 */}
            <Link to='/'>홈</Link>
            {/* user가 존재하면 (로그인 상태 일때) => 로그아웃 */}
            {user ? (
                <div>
                    {/* 프로필 페이지로 이동하는 링크 */}
                    <Link to='/profile'>프로필</Link>
                    {/* 로그아웃 버튼 클릭시 logout()함수 실행 */}
                    <button type='button' onClick={logout}>로그아웃</button>
                </div>
            ):(
                // user가 null인상태 이면 (로그아웃 상태 일때)
                // 로그인 페이지로 이동하는 링크만 보여줌
                <Link to='/login'>로그인</Link>
            )}
        </header>
    )
}