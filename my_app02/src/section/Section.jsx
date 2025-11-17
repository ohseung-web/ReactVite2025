import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Section.css'
import Drma from "../drma";
export default function Section(){

    const [movilist, setMovieList]=useState([])
    const [jangre, setJangre] = useState('')

    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setMovieList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    const DramaFilter = movilist.filter((item) => item.genres.includes('Drama'));
    const ActionFilter = movilist.filter((item) => item.genres.includes('Action'));
    const HorrorFilter = movilist.filter((item) => item.genres.includes('Horror'));
    const ThrillerFilter = movilist.filter((item) => item.genres.includes('Thriller'));
    const RomanceFilter = movilist.filter((item) => item.genres.includes('Romance'));
  
    const clickHandeler = (num) => {
       if(num === 1) {
           setJangre('Drama')
       }else if(num ===2 ){
           setJangre('Action')
       }else if(num === 3){
          setJangre('Thriller')
       }else{
          setJangre('Romance')
       }
    }
    return (
        <>
            <div className="section-container">
                <div className="bottombox">
                     <button type="button" onClick={()=>clickHandeler(1)}>드라마</button>
                     <button type="button" onClick={()=>clickHandeler(2)}>로맨스</button>
                     <button type="button" onClick={()=>clickHandeler(3)}>코미디</button>
                     <button type="button" onClick={()=>clickHandeler(4)}>애니메이션</button>
                 </div>
                 {/* 장르 클릭 여부에 따라 렌더링 구분 */}
                {jangre === "" ? (
                    <>
                    <div className="list01">
                        <h1>{jangre} 시리즈</h1>
                        <ul>
                        {DramaFilter.slice(0, 8).map((item, index) => (
                            <li key={index}>
                            <img src={item.image.medium} alt={item.name} width="210px" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="list02">
                        <h1>{jangre}  시리즈</h1>
                        <ul>
                        {HorrorFilter.slice(0, 8).map((item, index) => (
                            <li key={index}>
                            <img src={item.image.medium} alt={item.name} width="210px" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="list03">
                        <h1>{jangre}  시리즈</h1>
                        <ul>
                        {ActionFilter.slice(0, 8).map((item, index) => (
                            <li key={index}>
                            <img src={item.image.medium} alt={item.name} width="210px" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="list04">
                        <h1>{jangre}  시리즈</h1>
                        <ul>
                        {ThrillerFilter.slice(0, 8).map((item, index) => (
                            <li key={index}>
                            <img src={item.image.medium} alt={item.name} width="210px" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="list05">
                        <h1>{jangre}  시리즈</h1>
                        <ul>
                        {RomanceFilter.slice(0, 8).map((item, index) => (
                            <li key={index}>
                            <img src={item.image.medium} alt={item.name} width="210px" />
                            </li>
                        ))}
                        </ul>
                    </div>
                    </>
                ) : (
                    // 클릭했을 땐 해당 장르만 보여주기
                    <div className="list01">
                    <h1>{jangre} 시리즈</h1>
                    <ul>
                        {(jangre === "Drama"
                        ? DramaFilter
                        : jangre === "Action"
                        ? ActionFilter
                        : jangre === "Thriller"
                        ? ThrillerFilter
                        : jangre === "Romance"
                        ? RomanceFilter
                        : HorrorFilter
                        )
                        .slice(0, 8)
                        .map((item, index) => (
                            <li key={index}>
                            <img src={item.image.medium} alt={item.name} width="210px" />
                            </li>
                        ))}
                    </ul>
                    </div>
                )}
                <Drma movilist={movilist} />
                </div>
            </>
        )
    }