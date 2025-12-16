import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './pages/Section'
import ProDetail from './pages/ProDetail'
import useData from './pages/Data'

function App() {
   //커스텀 훅 + props 전달
 const data = useData();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Section data={data} />} />
        <Route path='/:id' element={<ProDetail data={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
