import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 내가만든 Test12함수를 import로 가저오기
import Test12 from './components/test12.jsx'
import Test13 from './components/test13.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    
  // </StrictMode>
)
