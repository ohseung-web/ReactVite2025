// counterReducer.js 파일은 
// 상태(state)와 동작(action)을 정의하는 가장 핵심 로직이다.
// Redux의 동작 원리
//  리듀서 -> 스토어 -> Provider -> 컴포넌트 
const initialState = {count:0} //initialState는 예약어이다., 고로 작명X
export default function counterReducer(state=initialState, action){
   //switch문을 이용하여 직접 함수를 생성해야 됨
   switch(action.type){
      case 'INCREMENT':
        return {count:state.count + 1} // count가 1씩 증가하는 함수
      case 'DECREMENT':
        return {count:state.count -1} // count가 1씩 감소하는 함수
      default:
        return state    
   }
}