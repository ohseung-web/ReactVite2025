import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// props => ffff(props)
// 구조 분해 할당 => 일일 변수로 대입해서 할당을 다시 한다.
// 반드시 구조 분해 할당은 중괄호{data}안에 입력한다.
export default function FakestoreDetail({data}){
    const {id} = useParams();
    // JSON 데이터 저장할 상태 변수
   
    // * 현재 useParams()받아온 id가 props 받은 data 같은 id가 
    // 존재하는지 찾아야 한다. *
    // 힌트 : find()함수 이용
    const product = data.find((data) => data.id === Number(id))
    //  http://localhost:5173/detail/2  => "2", 2
    // const[product, setProcudt]=useState(null);
    //  product = null => 데이터 안 받음
    //  product !== null => 데이터 받아옴
    
    
    //  React에서의 코드 표현 방식
    //  ! = Not = 부정 !product === !== null
    if(!product) return <p>데이터 불러오는 중...</p>

  return(
      <>
        {product !== null && product !== undefined ? (
          <div className='detail' style={{textAlign:'center'}}>
            <h1>상품 상세 보기</h1>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="200" />
            <p>카테고리 : {product.category}</p>
            <p>가격 : {product.price}</p>
            <p>평점 : {product.rating.rate}</p>
            <p>{product.description}</p>
            <Link to="/">상품목록으로 이동</Link>
          </div>) :null
        }
      </>
  )
}