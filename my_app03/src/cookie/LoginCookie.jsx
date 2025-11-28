import { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import './LoginNaver.css';

export default function LoginNaver() {
  // id, pw, checkbox 의 inputbox에 입력되는 값이 저장되는 상태저장 변수 필요
  const [userId,setUserid]=useState(cookie.get('userId') || '')
  const [userPw,setUserPw]=useState('')
  // 아이디 저장 체크박스가 체크되면 => 아이디 저장 , true, false이용
  const saveId = cookie.get('userId')
  const [idChk,setIdChk] = useState(saveId?true:false);
  
  // 아이디 저장 체크박스 변경 핸들러
  const idChkHandler = (e) => {
    setIdChk(e.target.checked);
  }

  // 로그인 버튼 클릭하는 핸들러
  // <form>안에 로그인 버튼을 클릭하면 기본으로 페이지가 새로고침이된다.
  // 새로고침 되면 react 상태가 초기화된다.
  // 화면에 input값과 체크박스 상태도 모두 사라진다.
  // 위의 오류를 해결하려려면 반드시
  // e.preventDefault()

  const loginHandler = (e) => {
     e.preventDefault();//폼의 기본 제출 동작을 막는다
    //  1분뒤 cookie 만료
    if(idChk){
        const oneMinute = new Date(Date.now()+1*60*1000);
        cookie.set('userId',userId,{expires:oneMinute,path:'/'})
    }else{
      // 아이디 저장 체크 안되어 있으면 cookie 삭제
      cookie.remove('userId',{path:'/'})
    }
    alert(`로그인 시도: ${userId}`)
  }


  return (
    <div className="container">
      <h2>NAVER</h2>
      <button type="button" className="tab">
        ID전화번호
      </button>
      <div className="loginWrap">
        <form onSubmit={loginHandler}>
          <ul>
            <li>
              <input
                type="text"
                id="userID"
                name="userID"
                value={userId}
                placeholder="아이디 또는 전화번호"
                onChange={(e)=>setUserid(e.target.value)}
              />
            </li>
            <li>
              <input
                type="password"
                id="userPw"
                name="userPw"
                value={userPw}
                placeholder="비밀번호"
                onChange={(e)=>setUserPw(e.target.value)}
              />
            </li>
            <li className="chkLogin">
              <label>
                <input
                  type="checkbox"
                  id="idChk"
                  name="idChk"
                  onChange={idChkHandler}
                />{' '}
                아이디 저장
              </label>
              <span>IP보안</span>
            </li>
          </ul>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}
