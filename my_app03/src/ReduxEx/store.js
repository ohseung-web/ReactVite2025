//store.js 
// 작성한 counterReducer.js 파일을 스토어 등록한다.
import {createStore} from 'redux'
import counterReducer from './counterReducer'

export const store = createStore(counterReducer)