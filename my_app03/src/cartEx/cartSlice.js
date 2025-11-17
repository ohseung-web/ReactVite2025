import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // name은 store에 저장될 key되는 이름임, 아주중요
    name:'cart',
    // items=[]빈배열 생성, 초기값 생성
    initialState:{ items:[]},
    // reducers는 로직
    reducers:{
        // addItem:(state)=>{
        //     // 아래 코드는 장바구니에 계속 같은상품인 상과만 삽입된다.
        //    state.items.push({id:1,name:'사과',price:1000})
        // }
        //  같은 상품은 수량만 증가하는 코드 필요
        addItem:(state,action)=>{
           console.log('삽입됬니?')
           console.log(action.payload)
           state.items.push(action.payload)
        },

        // removieItem() => 삭제함수 생성
        removieItem: (state,action) =>{
            console.log("아이디 뭐야")
            console.log(action.payload)
            // 같은 상품이 존재하면 삭제하고, 아니면 삭제 불가
            // 배열이름.findIndex(()=>조건) => 존재하는 값의 인덱스번호 출력
            // 값이 존재하지 않으면 -1이 출력됨
            // const delIndex = state.items.findIndex((item) => item.id === action.payload )
            // if(delIndex !== -1){ // 찾는 값이 존재하면 => 삭제
            //     state.items.splice(delIndex,1)
            // }
            state.items = state.items.filter((item) => item.id !== action.payload) 
        },
        reset:(state) =>{
            state.items = []
        }
    }
})

// 위에서 작성한 로직 , 이름은 모두 export로 내보낸다
export const {addItem,removieItem,reset} =cartSlice.actions
// switch ~ case문을 이용한 함수를 자동생성하는 부분
export default cartSlice.reducer