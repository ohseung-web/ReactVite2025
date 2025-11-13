import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HashRouter} from 'react-router-dom'
import './App.css'
// 4. App 컴포넌트 작성 (App.jsx)

// ➡ UI 구조를 잡고, Counter 컴포넌트를 불러옵니다.
import Counter from './ReduxEx/Counter'

function App() {

  return (
     <Counter />
  )
}

export default App
