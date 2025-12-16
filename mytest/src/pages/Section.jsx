import { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Section({data}){
        // const [productData, setProductData] = useState([]);

        // useEffect(()=>{
        //     const dataload = async() =>{
        //         try{
        //             const res =  await axios.get('https://dummyjson.com/products?limit=20')
        //             console.log('데이터',res.data.products)
        //             setProductData(res.data.products)
        //         }catch(error){
        //             console.log('데이터 호출 실패',error)
        //         }finally{
        //             console.log('요청 완료')
        //         }
        //     }
        //      // axios는 작성한 함수를 반드시 호출한다.
        //      dataload();
        // },[])

        return(
            <section className="section">
                <h3>상품목록</h3>
                <div className="product-grid">
                    {data.map((productItem)=>(
                        <div key={productItem.id} className="product-card">
                           <Link to={`/${productItem.id}`} >
                                  <img src={productItem.thumbnail} alt={productItem.thumbnail} />
                                <h4>{productItem.title}</h4>
                                <p>{productItem.price}</p>
                           </Link> 
                        </div>
                    ))}
                </div>
            </section>
        )


}