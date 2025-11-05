// Link : 페이지 이동을 위한 React Router 컴포넌트
import { Link } from 'react-router-dom';

// useContext : Context의 값을 가져올 수 있는 React Hook
import { useContext } from 'react';

// AuthContext : 우리가 만든 로그인 상태(Context) 가져오기
import { AuthContext } from '../../ContextAPI02/Contexts/AuthContext';

// Header 컴포넌트 정의 (화면 상단 네비게이션 바 역할)
export default function Header() {
  // useContext(AuthContext)를 통해 전역 상태를 읽음
  // user : 현재 로그인한 사용자 정보
  // logout : 로그아웃 함수
  const { user, logout } = useContext(AuthContext);

  // JSX 반환 (화면에 표시될 내용)
  return (
    <header className="header">
      <h1>Context 인증 실습</h1>

      {/* 내비게이션 메뉴 영역 */}
      <nav>
        {/* 언제나 보이는 '홈' 링크 */}
        <Link to="/">홈</Link>

        {/* user가 존재하면 (로그인 상태일 때) */}
        {user ? (
          <>
            {/* 프로필 페이지로 이동하는 링크 */}
            <Link to="/profile">프로필</Link>
            {/* 로그아웃 버튼 클릭 시 logout() 함수 실행 */}
            <button onClick={logout}>로그아웃</button>
          </>
        ) : (
          // user가 null이면 (로그아웃 상태일 때)
          // 로그인 페이지로 이동하는 링크만 보여줌
          <Link to="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
}
