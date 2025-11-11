import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
// useNavigate import 한다
import {Link, useNavigate} from 'react-router-dom'

export default function LoginPage(){
    // id, pw 상태 저장 변수 생성
    const[id, setId] =useState('')
    const[pw, setpw] =useState('')
    const {login} = useContext(AuthContext)
    // useNavigate 훅을 변수로 정의 해준다.
    const navigate = useNavigate();

    // id = 'admin'이면서 pw='1234' 로그인 성공
    // 로그인 성공시 alert(로그인 성공)
    // 로그인 성공시 home페이지로 이동
    // 아니면 'id, pw확인하세요'
    
    const loginHandeler =() => {
        if(id==='admin' && pw==='1234'){
            // 내 id는 home에 출력해야 함
            login(id)//AuthContext에서 정의한 정보
            alert('로그인 성공')
            // 논리 구현함수 안에 <Link to='' />사용금지
            navigate('/home') //home페이지로 이동
            // 단, history에 페이지가 존재해야 이동이 가능하다.
            // navigate(1) // 현제 페이지 보다 하나 앞 페이지로 이동
            // navigate(-1) // 현제 페이지 보다 하나 뒤 페이지로 이동
            // navigate(0) // 페이지 새로 고침


        }else{
            alert('id,pw 확인하세요')
        }
    }

    return(
        <div>
            <h2>로그인 페이지</h2>
            <input type="text" placeholder="id" value={id} onChange={(e)=>setId(e.target.value)} />
            <input type="password" placeholder="pw" value={pw} onChange={(e)=>setpw(e.target.value)} />
            <button type="button" onClick={loginHandeler}>로그인</button>
        </div>
    )
    
}