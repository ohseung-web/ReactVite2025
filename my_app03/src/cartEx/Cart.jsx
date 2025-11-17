import { useSelector,useDispatch } from "react-redux"
import { addItem,removieItem,reset } from "./cartSlice"

export default function Cart(){
    const items = useSelector((state) => state.cart.items)

    //데이터 내보기 useDispatch()
    const dispatch = useDispatch();
    //샘플 상품
    const sampleProducts = [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 1500 },
        { id: 3, name: '오렌지', price: 1200 },
    ]

    return(
        <div>
            <h2>장바구니</h2>
            <h3>상품목록</h3>
            <ul>
                {sampleProducts.map((item)=>(
                     <li key={item.id}>
                        {item.name}-{item.price}원
                        <button type="button" onClick={()=> dispatch(addItem(item))} >장바구니 추가</button>
                     </li>
                ))}
            </ul>
            <h3>장바구니 추가</h3>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>
                        {item.name}-{item.price}원
                        <button type="button" onClick={()=>dispatch(removieItem(item.id))} >삭제</button>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={()=>dispatch(reset())}>장바구니 비우기</button>
        </div>
    )

}