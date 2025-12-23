import { useState, useEffect } from "react";

export default function CartPage({data}){
    // useState 초기값을 localStorage에서 읽어오도록 한다.
    const [cartlist,setCartList] = useState(()=>{
         const saved = localStorage.getItem('cartlist')
        if(saved){
            //setCartList(JSON.parse(saved)); //상태 갱신
            return saved ? JSON.parse(saved):[]
        }
    });
    
    return(
    <>  <h2>장바구니</h2>
        {cartlist.length === 0?
         <p>장바구니가 비어있습니다.</p>    
    :<div>
          {cartlist.map((item,index)=>(
              <div key={index}>
                  <img src={item.thumbnail} alt={item.thumbnail}/>
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
              </div>
          ))} 
    </div>}
    </>
    )

}