import { useState, useEffect } from 'react';
import './fakestore.css';

export default function Fakestoreapi() {
  // https://fakestoreapi.com/products JSON 데이터 가져와
  // 상품목록을 category별 탭메뉴,
  // rating.rate의 평점을 내림차순으로 출력되도록 작성

  // JSON에서 데이터 넘겨받을 상태 변수
  const [data, setData] = useState([]);
  // category별 탭메뉴 작성 위한 상태 변수 
  const [tabList, setTabList] = useState("men's clothing");
  // 별점이 내림차순으로 출력되도록 보이고/안보이게 상태 변수
  const [rateShow, setRateShow] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          // throw new Error('에러상태', res.status);
          // 리액트 Error 생성하는 생성자 동작방식 때문에 생기는 문제
          //Throw new Error('에러상태', res.status); => 인수 2개(  ,  )
          //  => Throw new Error은 앞에 인수 하나만 인식한다.
          // Throw new Error('에러상태)
          // Throw new Error(res.status)
          throw new Error(`에러상태 ${res.status}`);
          //위 처럼 입력해야  => 에러 상태: 404 콘솔에 출력됨
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        //console.log(`Json으로 ${data}`) => [Object, object]
        // 배열 또는 객체{}는 문자열로 바꾸어 출력하려고 한다.
        // .toString() 자바스크립트가 가지고 있는 메서드 객체이다.
        // Array나 Object의 기본 toString()은 사람이 알아 볼수 없는 형태
        // => [Object  Object]형태로 호출한다.
        // 문자열 변환 방식의 한계이다.
        // 고로 여기서는 console.log( 인수1 , 인수2  )
        console.log('json으로 받아온 데이터', data);
      })
      .catch((err) => {
        console.log(`에러메시지: ${err.message}`);
      })
      .finally(() => {
        console.log('요청 완료!');
      });
  }, []);

  //  category tab메뉴 추출
  //  filter 함수 사용
  const tabFilter = data.filter((item) => item.category === tabList )
  //  rating은 모든 제품 필터 
  //  나중을 대비한 방지용 코드
  const rateFilter = data.filter((item) => item.rating.rate > 0 )
  // reateFilter이용해 sort()함수로 정렬 한다.
  // sort((a, b) => a - b) : 오름차순 정렬
  // sort((a, b) => b - a) : 내림차순 정렬
  // 얕은 복사
  const rateCopy = [...rateFilter]
  const rateSort = rateCopy.sort((a,b) => b.rating.rate - a.rating.rate)
  // onClick 핸들러 함수
  const clickHandeler = (num) =>{
      if(num === 1){
          setTabList("men's clothing")
      }else if(num === 2){
         setTabList("jewelery")
      }else if(num === 3){
         setTabList("electronics")
      }else{
          setTabList("women's clothing")
      }
      setRateShow(false);
  }
  return (
    <div>
       <h1>FakeStore</h1>
       <button type='button' onClick={() => clickHandeler(1)}>Man's clothing</button>
       <button type='button' onClick={() => clickHandeler(2)}>jewelery</button>
       <button type='button' onClick={() => clickHandeler(3)}>electorics</button>
       <button type='button' onClick={() => clickHandeler(4)}>women's clothing</button>
       <button type='button' onClick={()=>setRateShow(true)}>rating</button>
       <ul>
        {/* setRateShow(true)이면 rateSort가 출력되고, 아니며
            tabFilter이 출력되도록 작성한다.
        */}
          {(rateShow ? rateSort :tabFilter).map((item)=>(
             <li key={item.id}>
               <img src={item.image} alt={item.title} />
               <p>{item.title}</p>
               <p>{item.price}</p>
               <p>{item.rating.rate}</p>
             </li>
          ))}
       </ul>
    </div>
  );
}
