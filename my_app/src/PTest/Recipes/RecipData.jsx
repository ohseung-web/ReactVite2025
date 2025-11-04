import { useState, useEffect } from 'react';

export default function useRecipes() {
  const [data, setData] = useState([]);
  // JSON 데이터 30개 => 배열
  // JSON {id:1, name:A, count:1}
  // JSON {id:2, name:A, count:1}
  // JSON {id:3, name:A, count:1}
  // JSON {id:4, name:A, count:1}
  // [{id:1, name:A, count:1},
  // {id:2, name:A, count:1},  
  // ]

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => {
        if (!res.ok) throw new Error(`에러 상태 ${res.status}`);
        return res.json();
      })
      .then((json) => {
        console.log('받아온 레시피 데이터', json);
        setData(json.recipes);
      })
      .catch((err) => {
        console.log(`에러메시지: ${err.message}`);
      })
      .finally(() => console.log('요청 완료!'));
  }, []);

  return data;
}
