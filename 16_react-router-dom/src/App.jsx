import React from 'react'
import Navbar from './Pages/Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      
        <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
