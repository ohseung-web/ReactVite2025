import { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Section({data}){
      // useState 초기값을 localStorage에서 읽어오도록 한다.
    const [cartlist,setCartList] = useState(()=>{
         const saved = localStorage.getItem('cartlist')
        if(saved){
            //setCartList(JSON.parse(saved)); //상태 갱신
            return saved ? JSON.parse(saved):[]
        }
    });
    
       // cartlist 바뀔때마다 cartlist에 저장
       useEffect(()=>{
         localStorage.setItem('cartlist',JSON.stringify(cartlist));
       },[cartlist])

       const clickHandler = (product) =>{
            const carlistCopy = [...cartlist]
            carlistCopy.push(product)
            setCartList(carlistCopy)
            //setCartList([...cartlist, product]);
            alert(`${product.title}장바구니 추가됨`)
       }
        return(
            <section className="section">
                <h3>상품목록</h3>
                <div className="product-grid">
                    {data.map((productItem)=>(
                        <div key={productItem.id} className="product-card" >
                           <Link to={`/detail/${productItem.id}`} >
                                  <img src={productItem.thumbnail} alt={productItem.thumbnail} />
                                <h4>{productItem.title}</h4>
                                <p>{productItem.price}</p>
                           </Link> 
                           <button type="button" onClick={()=>clickHandler(productItem)}>❤</button>
                        </div>
                    ))}
                </div>
            </section>
        )


}