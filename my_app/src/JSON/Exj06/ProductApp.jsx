import {useState, useEffect} from 'react'
import './ProductApp.css'

export default function ProductApp(){
    const[products, setProducts]=useState([])

    const imgJSON = () =>{
        // https://jsonplaceholder.typicode.com/photos?  
        // https://picsum.photos/
        fetch('https://jsonplaceholder.typicode.com/photos?')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`오류 ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            const dataslice = data.map((product)=>({
                id:product.id,
                name:product.title.slice(0,10),
                price:1000*product.id,
                img:`https://picsum.photos/150?random=${product.id}`
            }))
            setProducts(dataslice)
        
        })
        .catch((err)=>{console.log(err.message)})
        .finally(()=>{console.log('요청 완료')})

    }

    useEffect(()=>{
        imgJSON()
    },[])

    return(
        <>
          <ul>
             {products.slice(0,20).map((item,index)=>(
                <li key={index}>
                    <img src={item.img} alt={item.name} />
                     <p>{item.title}</p> 
                </li>
             ))}
          </ul>
        </>
    )
}