import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TopMenu from "./TopMenu";
import './Header.css';

export default function Header(){

     const [movilist, setMovieList]=useState([])

    useEffect(()=>{
        fetch('https://api.tvmaze.com/shows')
        .then((res)=>{ return res.json() })
        .then((data)=>{ setMovieList(data)
            console.log('데이터') })
        .catch(()=>{})
        .finally(()=>{})
    },[])

    // 장르 클릭 핸들러
  const handleGenreClick = (genre) => {
    setSelectjangre(genre);
  }

//    return (
//     <div className="header-container">
//       <div className="top-box">
//         <ul className="tbox01">
//           <li><Link to='/'><img src="img/1695032536_1.svg" alt="tving logo" /></Link></li>
//           <li><button onClick={() => handleGenreClick('Drama')}>드라마</button></li>
//           <li><button onClick={() => handleGenreClick('Romance')}>로맨스</button></li>
//           <li><button onClick={() => handleGenreClick('Comedy')}>코미디</button></li>
//           <li><button onClick={() => handleGenreClick('Animation')}>애니메이션</button></li>
//           <li><button onClick={() => handleGenreClick('Thriller')}>스릴러</button></li>
//           <li><button onClick={() => handleGenreClick('Mystery')}>미스터리</button></li>
//           <li><button onClick={() => handleGenreClick('Adventure')}>모험</button></li>
//           <li><button onClick={() => handleGenreClick('Action')}>액션</button></li>
//           <li><button onClick={() => handleGenreClick('Fantasy')}>판타지</button></li>
//           <li><button onClick={() => handleGenreClick('Science-Fiction')}>SF</button></li>
//           <li><button onClick={() => handleGenreClick('Horror')}>공포(호러)</button></li>
//           <li><button onClick={() => handleGenreClick('Documentary')}>다큐멘터리</button></li>
//         </ul>
//       </div>
//     </div>
//   );
    return (
        <>
            <div className="header-container">
                <div className="top-box">
                    <ul className="tbox01">
                        <li><Link to='/'><img src="img/1695032536_1.svg" alt="tving logo" /></Link></li>
                        <li><Link to='/drma'>드라마</Link></li>
                        <li><Link to='/'>예능</Link></li>
                        <li><Link to='/'>영화</Link></li>
                        <li><Link to='/'>스포츠</Link></li>
                        <li><Link to='/'>애니</Link></li>
                        <li><Link to='/'>뉴스</Link></li>
                        <li><Link to='/'>라이브</Link></li>
                    </ul>
                    <ul className="tbox02">
                        <li><input type="text" placeholder="작품명을 입력하세요."/>🔍</li>
                        <li><img src="img/vpace.jpg" alt="" /></li>
                    </ul>
                </div>
                <div className="centerbox">
                    <img src="img/6u5x4l6u5x4l6u5x.png" alt="poster" />
                </div>
            </div>
        </>
    )
}