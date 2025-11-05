// useContext : 전역(Context) 데이터를 가져오기 위한 Hook
import { useContext } from 'react';

// 우리가 만든 로그인 정보 Context 불러오기
import { AuthContext } from '../../ContextAPI02/Contexts/AuthContext';

// Link : 로그인 안 된 경우 로그인 페이지로 이동하기 위한 컴포넌트
import { Link } from 'react-router-dom';

// Profile 컴포넌트 정의
export default function Profile() {
  // AuthContext에서 user 상태 가져오기
  // user : 현재 로그인된 사용자 정보 (로그인 안 된 경우 null)
  const { user } = useContext(AuthContext);

  // 만약 로그인 상태가 아니라면 (user가 null이라면)
  if (!user) {
    return (
      <div className="profile-container">
        {/* 로그인 안내 메시지 */}
        <p>로그인이 필요합니다.</p>

        {/* 로그인 페이지로 이동하는 링크 */}
        <Link to="/login">로그인 하러 가기</Link>
      </div>
    );
  }

  // 로그인된 상태라면 프로필 화면 출력
  return (
    <div className="profile-container">
      <h2>프로필 페이지</h2>

      {/* 로그인한 사용자의 이름 출력 */}
      <p>
        안녕하세요, <strong>{user.name}</strong> 님!
      </p>

      {/* 인사 문구 */}
      <p>오늘도 좋은 하루 되세요 ☀️</p>
    </div>
  );
}
