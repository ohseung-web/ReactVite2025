// useState : 컴포넌트 내부에서 상태(state)를 관리하기 위한 Hook
// useContext : 전역(Context)의 값을 가져오기 위한 Hook
import { useState, useContext } from 'react';

// Link : 클릭 시 페이지를 새로고침 없이 이동시켜주는 컴포넌트
import { Link } from 'react-router-dom';

// 우리가 만든 로그인 상태 관리 Context 불러오기
import { AuthContext } from '../../ContextAPI02/Contexts/AuthContext';

// LoginForm 컴포넌트 정의
export default function LoginForm() {

  // username : 입력한 사용자 이름을 저장할 상태 변수
  // setUsername : username 값을 변경하는 함수
  const [username, setUsername] = useState('');

  // AuthContext에서 login 함수와 user 상태를 가져옴
  // login : 로그인 처리 함수 (AuthProvider에서 제공)
  // user : 현재 로그인된 사용자 이름 (로그인 안 된 경우 null)
  const { login, user } = useContext(AuthContext);

  // 폼 제출 시 실행되는 함수
  const handleSubmit = (e) => {
    // 기본 폼 제출(새로고침) 막기
    // e.preventDefault(); 

    // 입력값이 비어있으면 경고창 띄우기
    if (username === '') return alert('이름을 입력하세요!');

    // login 함수 실행 → 전역 상태(Context)에 로그인 정보 저장
    login(username);
  };

  return (
    <div className="login-container">
      {/* user가 존재한다면(=로그인된 상태라면) */}
      {user ? (
        <>
          {/* 로그인된 사용자 이름 출력 */}
          <p>{user.name}님, 로그인 되었습니다 😊</p>

          {/* navigate 대신 Link로 이동 버튼 제공 */}
          <Link to="/profile">
            <button>프로필로 이동</button>
          </Link>
        </>
      ) : (
        // user가 없으면(=로그인 안 된 상태면) 로그인 폼을 보여줌
        <form onSubmit={handleSubmit}>
          <h2>로그인</h2>

          {/* 사용자 이름 입력창 */}
          <input
            type="text"
            placeholder="사용자 이름"
            value={username} // 상태값과 연결 (controlled input)
            onChange={(e) => setUsername(e.target.value)} // 입력 시 상태값 변경
          />

          {/* 로그인 버튼 → 클릭 시 handleSubmit 실행 */}
          <button type="submit">로그인</button>
        </form>
      )}
    </div>
  );
}
