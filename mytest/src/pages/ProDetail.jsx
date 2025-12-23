import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProDetail({data}){
    const {id} = useParams();
    // data는 상품 하나가 아니라 “상품 배열” 입니다.
    //productData는 아래와 같은 구조입니다:
    // [
    //   { id: 1, title: "...", thumbnail: "..." },
    //   { id: 2, title: "...", thumbnail: "..." },
    //   ...
    // ]
     
    // useParams()에서 받아온 id가 존재하는지 find()함수로 찾는다
    // find() 메서드는 찾는 값이 존재하면 존재하는 id를 기준으로
    // {id:1, title:"...", ~~~}이렇게 출력된다. 
    // 아니면 undefined를 반환한다.
    const product = data.find(item => item.id === Number(id))
    console.log('find',product);

    if(!product){
        return(
            <p>정보를 불러오은 중입니다.</p>
        )
    }

     return (
        <div className="detailPage">
            <h1>상품 상세 페이지</h1>
            <p>
            이 상품의 ID는 <strong>{id}</strong>입니다.
            </p>
            <img src={product.thumbnail} alt={product.title} />
            <Link to="/">상품 목록으로 이동</Link>
        </div>
    );
}

