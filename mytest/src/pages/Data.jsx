import { useState,useEffect } from "react";
import axios from 'axios';

export default function useData(){
    const [productData, setProductData] = useState([]);
     useEffect(()=>{
            const dataload = async() =>{
                try{
                    const res =  await axios.get('https://dummyjson.com/products?limit=20')
                    console.log('데이터',res.data.products)
                    setProductData(res.data.products)
                }catch(error){
                    console.log('데이터 호출 실패',error)
                }finally{
                    console.log('요청 완료')
                }
            }
             // axios는 작성한 함수를 반드시 호출한다.
             dataload();
        },[])
      // JSON에서 받아온 data 상태변수를 return을 이용하여 반환하여 준다
    return productData;   
}
