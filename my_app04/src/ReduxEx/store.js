// 2. 스토어 파일 작성 (store.js)

//➡ 리듀서를 Redux 스토어로 등록합니다.

import {createStore} from 'redux'
import counterReduxer from './counterReducer'

export const store = createStore(counterReduxer)