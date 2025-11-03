import { useState, useEffect } from "react";

export default function Ex06(){
    // toggle = false => 토글 안보임
    const[toggle, setToggle]=useState(false)
    // toggle => false <-> true 함수작성
    const Togglehandeler = () =>{
        setToggle(!toggle)
    }
    return(
        <div>
            <h1>LifeCycle Demo</h1>
            <button type="button" onClick={Togglehandeler}>
                {toggle?'컴포넌트 숨기기':'컴포넌트 보이기'}</button>
                {/* 조건부 랜더링 toggle이 true일 때만 자식 컴포넌트 랜더링 */}
                {toggle && <ChildEx06 />}
            <p>F12를 눌러 콘솔을 확인하세요</p> 
            <p>컴포넌트의 마운트/언마운트 메시지가 출력됩니다.</p> 
        </div>
    )
}


function ChildEx06(){
    // useEffect를 자식이 가지도록 구현
    useEffect(() => {
      console.log('컴포넌트가 마운트 되었습니다.')
    //   cleanUp 함수 작성
      return () =>{console.log('컴포넌트가 언마운트 되었습니다.')}
    },[]) // <= []빈배열로 작성하면 마운트시 1회, 언마운트시 1회 실행됨

    return (
        <>
           <p>안녕하세요! 저는 토글 가능한 컴포넌트 입니다.</p>
        </>
    )
}