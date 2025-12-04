import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './ReduxEx/Counter'
import Counter from './ReduxToolkit/counter'
// import Cart from './cartEx/Cart'
import Test from './test'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Section from './pages/Section'
import Header from './components/Header'
import Footer from './components/Footer'
import Cartpage from './pages/CartPage'
import CookieTest from './cookie/CookieTest'
import LoginNaver from './cookie/LoginCookie'

function App() {

  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Section />} />
    //     <Route path="/cart" element={<Cartpage />} />
    //     {/* <Route path="/login" element={<LoginNaver />} /> */}
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <>
      <LoginNaver />
    </>
  )
}

export default App
