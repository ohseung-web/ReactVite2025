import { useState, useEffect } from "react";

export default function Ex05(){
    // 제목 입력 상태 변수
    const[Tit, setTit]=useState('')
    useEffect(() =>{
        // 입력값이 있으면 그값을, 없으면 기본 제목을 설정
        if(Tit.trim() !== ''){
            document.title = Tit
        }else{
            document.title ="제목을 입력하세요"
        }
    },[Tit])
    
    const changeHandeler = (e) =>{
        setTit(e.target.value)
    }

    return(
        <div>
            <h1>Dynamic Title Generator</h1>
            <input type="text" value={Tit} placeholder="제목 입력" onChange={changeHandeler}/>
            <p>입력내용이 실시간으로 브라우저 탭 제목에 반영됩니다.</p>
        </div>
    )
}