// ProductList.jsx
import React from 'react';
import ProductItem from '../shop/ProductItem';

export default function ProductList(props) {
  // <ul>만 생성 할 예정
  return(
    <>
      <ul>
         {props.products.map((product) => (
            //  자식 컴포넌트 ProductItem 태그로 가저온다.
            <ProductItem key={product.id} 
            product={product} 
            addCart={props.addCart} />
         ))} 
      </ul>
    </>
  )
}
