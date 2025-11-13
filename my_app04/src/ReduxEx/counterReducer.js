// counterReducer 파일 작성 (counterReducer.js)

// ➡ 상태(state)와 동작(action)을 정의하는 가장 핵심 로직입니다.

// 이유:
// Redux의 동작 원리는 리듀서 → 스토어 → Provider → 컴포넌트 순으로 구성되기 때문이에요.

const initialState = {count : 0};
export default function counterReduxer(state=initialState,action){
   switch(action.type){
     case 'INCREMENT':
        return {count:state.count+1}
     case 'DECREMENT':
        return {count:state.count -1}
     default:
        return state      
   }
}
