import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 커스텀 훅 => 훅을 제조해서 만든 훅 useProduct()
// 커스텀 훅 안에 useState, useEffect, fetch()만으로 구성된 함수
export default function useProduct(){
    const [data, setData]=useState([])
useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`에러상태 ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log('json으로 받아온 데이터', data);
      })
      .catch((err) => {
        console.log(`에러메시지: ${err.message}`);
      })
      .finally(() => {
        console.log('요청 완료!');
      });
  }, []);

    // JSON에서 받아온 data 상태변수를 return을 이용하여 반환하여 준다
    return data;
}