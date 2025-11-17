import { useEffect } from "react";
//반드시 axios는 import해야 한다.
import axios from 'axios'
import { useState } from "react";

export default function Test(){
    const [data, setData] = useState([])
  
    useEffect(()=>{
        // load라는 비동기 함수를 만들어서 API 요청
        const load = async() =>{
            try{
                //axios.get()을 이용해 API 호출한다.
                //async() ~~~ await axios.get(URL)
                const res = await axios.get('https://dummyjson.com/products?limit=20')
                console.log(res.data)
                setData(res.data.products)
            //    dispatch(setProdcut(res.data.products))
            }catch(err){
              console.log('상품데이터 호출 실패', err)
            }finally{
               // 로딩이 성공/실패하든 무조건 실행
               console.log('요청 완료')
            }
        }
        // 반드시 작성한 함수를 호출해야한다.
        load()
    },[])

    return(
        <>
           <ul>
              {data.map((dataitem) =>(
                 <li key={dataitem.id}>
                    {dataitem.title}
                 </li>
              ))}
           </ul>
        </>
    )
}