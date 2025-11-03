import { useEffect, useState } from "react";

export default function Exfecth(){
    // 1. 상태변수
    // 로딩 중 표시
    // 현재 loading = true면 로딩중.....
    // loading = false => 종료 , 종료를 안하면 계속 로디중이 됨
    const[loading, setLoading]=useState(true);
    // 가져온 데이터 저장
    const[data, setData]=useState([])
    //  에러 메시지 저장
    const[errMsg, setErrMsg]=useState(null)

    useEffect(()=>{

        console.log("데이터 요청 시작")
        fetch('https://jsonplaceholder.typicode.com/users')
        // res => response객체의 약어
        // 이미 리액트의 객체로 존해한다.
        .then((res)=>{
            // 상태 정상이면 true반환하고, 상태정상이 아니면 false반환
            // res.ok = true
            if(!res.ok){
                // HTTP 상태의 코드를 확인
                throw new Error(`HTTp error! status: ${res.status}`)
            }
            // JSON 파싱( 해석 )
            return res.json()  
        })
        .then((data)=>{
            // 지금 불러온 데이터는 이 부분에만 존재한다.
           console.log('가져온 데이터',data)
           setData(data) // 상태 저장
        })
        // err를 catch한다라는 의미이다.
        .catch((err) =>{
           console.log('x 에러 발생',err)
        //   에러 상태 저장
        //  .message response 객체가 가지고 있는 메서드
           setErrMsg(err.message)
        })
        // 실패하든 성공하는 무조건 실행
        .finally(() =>{
            console.log('요청 완료')
            // 로딩 종료
            setLoading(false)
        })
    },[])//<=빈 의존객체 배열이용하여 1회만 실행 함
    
    // 2. 화면 표시
    // 불러오는 중...... 출력하고 싶다
    //  => 조건 : loading = true
    if(loading){
        return <p>데이터 불러오는 중....</p>
    }
    // error 출력
    if(errMsg){
        return <p>x 에러 : {errMsg}</p>
    }
    
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {data.map((data)=>(
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>
        </div>
    )
}