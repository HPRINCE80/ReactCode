import React from 'react'
import Nabar from "./components/Nabar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen bg-black text-white  '>
      <Nabar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product' element={<Product/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
