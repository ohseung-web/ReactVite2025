import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './ReduxEx/store.js'
import {Provider} from 'react-redux'
// 3. Provider 설정 (main.jsx 또는 index.js)

// ➡ React 최상위 컴포넌트(App)를 Redux Store와 연결합니다.

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </StrictMode>,
)
