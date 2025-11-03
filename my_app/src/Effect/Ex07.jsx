import { useState, useEffect } from "react";

export default function Ex07(){
    // 현재 시간을 저장하는 상태변수 생성
    // new Date() => 오늘날짜/현재시간을 반환 한다.
    // new Date() => 코어 객체 => {key:value....}
    // 객체 같으면 => 같은 주소에 존재하니까 => 같은 => 랜더 포기
    const[currTime, setCurrTime]=useState(new Date())

    // 컴포넌트가 화면에 나타날때, 시간 업데이트 시작
    useEffect(()=>{
        // 1초마다 실행되는 함수
        const timer = setInterval(()=>{
            // 얕은복사 => 서로 다른 주소에 존재하니까 다른 아이야
            // 그니까 => 그림 그려줘
            const currNow = new Date();
            // setCurrTime(`${}:${}:${}`)  => 문자형식
            // 객체형식으로 업데이트 시킴
            setCurrTime(currNow) 
            // 상태를 업데이트하면 화면도 같이 바뀜
        },1000)
        // console.log(now); 
        // cleanup 함수
        return () => clearInterval(timer)
    },[])
    
    // 시:분:초 => 두 자리씩 출력하는 함수 생성
    // 10이하의 모든 숫자에 앞에 0을 붙인다.
    const twoTime = (num) => (num<10?`0${num}`:num) 
    
    // 시, 분, 초 추출
    const hour = twoTime(currTime.getHours()) //시 추출
    const minute = twoTime(currTime.getMinutes()) //분 추출
    const second = twoTime(currTime.getSeconds()) //초 추출

    return(
        <div>
            <h1>DEGITAL CLOCK</h1>
            {/* 시 : 분 : 초 => 00:00:00 */}
            <p>{hour}:{minute}:{second}</p>
            {/* 날짜 : 2025년 10월 39일 목요일 */}
            {/* 현재 지금지역의 날짜를 영문법으로 출력하는 함수 */}
            <p>{currTime.toLocaleDateString()}</p>
        </div>
    )
}