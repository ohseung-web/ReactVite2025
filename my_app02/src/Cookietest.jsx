import Cookies from 'js-cookie';
import {useState} from 'react'

export default function CookieTest(){
    // 쿠키를 읽어와서 cookieValue의 상태변수에 저장한다.
    const [cookieValue, setCookieValue] = useState(Cookies.get('userName'));

    // 쿠키를 저장하는 함수를 생성
    const CookieSave = () => {
        Cookies.set('userName','홍길동',{expires:1})//1루 동안 유지
        setCookieValue('홍길동')
        alert('쿠키 저장됨')
    }

    // 쿠키 확인하는 함수
    const CookieChk = () => {
        const value = Cookies.get('userName')
        if(value){
            alert(`쿠키 ${value}`)
        }else{
            alert('쿠키가 없습니다.')
        }
    }

    // 쿠키 삭제하는 함수 생성
    const CookieDel = () => {
        Cookies.remove('userName')
        setCookieValue('')
        alert('쿠키가 삭제 되었습니다.')
    }

    return(
        <>
          <div>
             <h2>쿠키 예제</h2>
             <p>현제 쿠키 값 : {cookieValue}</p>
             <button type='button' style={{backgroundColor:'dodgerblue',color:'#fff'}} onClick={CookieSave}>쿠키 저장</button>
             <button type='button' style={{backgroundColor:'dodgerblue',color:'#fff'}} onClick={CookieChk}>쿠키 확인</button>
             <button type='button' style={{backgroundColor:'dodgerblue',color:'#fff'}} onClick={CookieDel}>쿠키 삭제</button>
          </div>
        </>
    )
}
