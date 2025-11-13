// 5. Counter 컴포넌트 작성 (Counter.jsx)

// ➡ useSelector와 useDispatch를 이용해 상태를 읽고 액션을 보냅니다.

// “dispatch는 단순히 값만 보내고,
// counterReducer가 그 값을 처리해서 store에 저장하고,
// Counter.jsx가 useSelector로 그걸 읽는다.”

import {useSelector, useDispatch} from 'react-redux'
export default function Counter(){
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    
     console.log("1 dispatch 실행 전 count:", count);
    const plushandler = () => {
        if(count >= 10 ){
             alert("수량은 10개까지 가능")
        }else{
            dispatch({type:'INCREMENT'})
            console.log("2 dispatch 실행 직후 count:", count);
        }
    }
    
    const minushandler = () => {
        if(count <= 0 ){
             alert("수량은 최소 1개이상 선택")
        }else{
            dispatch({type:'DECREMENT'})
        }
    }

    return(
        <>
          <h2>Count {count}</h2>
          <button type='button' onClick={plushandler}>+</button>
          <button type='button' onClick={minushandler}>-</button>
          {/* <button type='button' onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
          <button type='button' onClick={()=>dispatch({type:'DECREMENT'})}>-</button> */}
        </>
    )
}
