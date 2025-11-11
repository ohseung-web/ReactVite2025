import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserApp from './UserApp'
import ThemeLayout from './ContextAPI/pages/ThemeLayout'
// ThemeProvider 를 import하여 안에 
// ThemeContext.Provider가 감싸는 형식을 구현한다.
import ThemeProvider from './ThemeContext'
import Join from './Addr/Join'
// import Home from './Context02/pages/Home'
// import Profile from './Context02/components/Profile'
// import LoginForm from './Context02/components/LoginForm'
// import AuthProvider from './Context02/contexts/AuthContext'
// import Header from './Context02/components/Header'

// import WishlistProvider from './wishlist/WishlistContext'
// import ProductList from './wishlist/ProductList'
// import WishlistPage from './wishlist/WishlistPage'

// import AuthProvider from './LoginExample/Context/AuthContext'
// import LoginPage from './LoginExample/Pages/LoginPage'
// import HomePage from './LoginExample/Pages/HomePage'
import CookieTest from './Cookietest'
import LoginNaver from './LoginNaver'
function App() {
  // ProductList, WishlistPage를 선택하도록 하기위한 상태변수
  // const [showlist, setShowlist] = useState(false)

  return (
    <>
       {/* <ThemeProvider>
         <ThemeLayout />
       </ThemeProvider> */}
       {/* <AuthProvider>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/profile' element={<Profile />} />
         </Routes>
       </AuthProvider> */}
      {/* <WishlistProvider>  */}
        {/* 헤더 영역 */}
        {/* <header style={{display:'flex' */}
        {/* ,padding:'20px', */}
        {/* justifyContent:'center', */}
        {/* backgroundColor:'#eee' */}
      {/* }}> */}
        {/* <h2>찜하기 예제</h2> */}
        {/* 찜목록 보기  <-> 상품 보기 토글*/}
        {/* <button type='button' onClick={()=>setShowlist(!showlist)}> */}
          {/* {showlist?'상품 보기':'찜 목록 보기'} */}
        {/* </button> */}
      {/* </header> */}
       {/* 본문영역 */}
       {/* showlist가 true이면 => WishlistPage 출력 */}
       {/* showlist가 false이면 => ProductList페이지 출력 */}
       {/* {showlist?<WishlistPage />:<ProductList />}
      </WishlistProvider> */}
      {/* <AuthProvider>
         <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/home' element={<HomePage />}/>
         </Routes>
      </AuthProvider> */}
      <LoginNaver />
    </>
  )
}

export default App
