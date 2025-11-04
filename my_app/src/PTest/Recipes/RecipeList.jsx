import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recip.css';

export default function RecipeList({ data }) {
  const [cuisineTab, setCuisineTab] = useState('All');
  const [sortByRating, setSortByRating] = useState(false);

  const cuisines = ['All', ...new Set(data.map((item) => item.cuisine))];

  const filtered =
    cuisineTab === 'All'
      ? data
      : data.filter((item) => item.cuisine === cuisineTab);

  const sorted = sortByRating
    ? [...filtered].sort((a, b) => b.rating - a.rating)
    : filtered;

  // const [likes, setLikes] = useState(() => {
  //   const initialLikes = {};
  //   data.forEach((item) => {
  //     initialLikes[item.id] = 0;
  //   });
  //   return initialLikes;
  // });

   // defaultLikes는 컴포넌트가 렌더링될 때마다 다시 실행돼요.
// 즉, 버튼을 누를 때마다 React가 화면을 다시 그리고 →
// 그 과정에서 defaultLikes를 새로 만들고 →
// useState(defaultLikes)가 다시 0으로 초기화되지는 않지만,
// 렌더링 시점마다 likes와 defaultLikes가 일치하지 않아 NaN이 나오는 경우가 생겨요.
//  방어 코드
// data.length > 0일 때만 초기화하도록 바꾸
  // const handleLike = (id) => {
  //   setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  // };

  


//  좋아요 출력할 방향
//  like = {1:0,2:0,3:0.....}
//  id  음식명  좋아요
//  1   된장찌개 0
//  2   김치찌개 0
//  3   피자     0
//  like 상태변수
//  JSON 자체가 오브젝트 이기때문에 아래와 같이 초기화 할 수 없다
//  이유는 하나 항목만 좋아요가 0이 되기 때문에

// 오브젝트에 0을 초기화 하는 초기값 변수
const defaultLikes = {} // 빈 배열 또는 빈 오브젝트 undefined 될 가망성 높음

if(data.length > 0){
    for(let i=0; i<data.length; i++){
        const recip = data[i]
        // defaultLikes[1]=0 
        // {id:1, 좋아요:0}
        defaultLikes[recip.id] = 0 // 각 레시피 id별로 초기값 0으로 셋팅
   }
}

const [likes, setLikes] = useState(defaultLikes)
 
// 좋아요 버튼 클릭시 좋아요 1씩 증가하는 핸들러 작성
const handleLike = (id) => {
  //  배열이나 또는 오브젝트는 힙의 어드레스 번지 주소가
  //  같으면 리랜더링을 하지 않기때문에 반드시 얕은 복사 필요
  const likesCopy = {...likes}
  // 현재 undefined인 경우 => undefined  + 1 => NaN이 나옴
  likesCopy[id] = (likesCopy[id] !== undefined ? likesCopy[id]:0) + 1
  setLikes(likesCopy)
}


  return (
    <div className="recipe-list-container">
      <h2>레시피 목록</h2>
      <div className="tabMenu">
        {cuisines.map((c) => (
          <button
            key={c}
            type="button"
            className={cuisineTab === c ? 'active' : ''}
            onClick={() => {
              setCuisineTab(c);
              setSortByRating(false);
            }}
          >
            {c}
          </button>
        ))}
        <button type="button" onClick={() => setSortByRating(true)}>
          Rating 순
        </button>
      </div>

      <ul className="recipeList">
        {sorted.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </Link>
            <p>요리 유형: {item.cuisine}</p>
            <p>평점: {item.rating}</p>
            {/* 좋아요 버튼 */}
            <button className="like-btn" onClick={() => handleLike(item.id)}>
              ❤️ 좋아요 {likes[item.id]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
