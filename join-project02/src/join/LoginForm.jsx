import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

export default function LoginForm() {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost/join-project/backend/api/login.php',
        {
          userid,
          userpw,
        }
      );

      if (res.data.status === 'success') {
        alert(`${res.data.user.username}님, 환영합니다!`);
        
        // 로그인 정보 저장 (선택사항)
        localStorage.setItem('user', JSON.stringify(res.data.user));
        
        // 홈으로 이동
        navigate('/');
        
        // 입력 필드 초기화
        setUserid('');
        setUserpw('');
      } else {
        alert(res.data.message || '로그인 실패');
      }
    } catch (error) {
      console.error('에러:', error);
      alert('서버 연결 오류');
    }
  };

  return (
    <div className="loginWrap">
      <h2>로그인</h2>
      <form onSubmit={login}>
        <ul>
          <li>
            <label>
              아이디 :
              <input
                type="text"
                placeholder="아이디"
                onChange={(e) => setUserid(e.target.value)}
                value={userid}
              />
            </label>
          </li>
          <li>
            <label>
              비밀번호 :
              <input
                type="password"
                placeholder="비밀번호"
                onChange={(e) => setUserpw(e.target.value)}
                value={userpw}
              />
            </label>
          </li>
        </ul>
        <div className="btn">
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}