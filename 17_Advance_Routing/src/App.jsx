import React from 'react'
import Nabar from "./components/Nabar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Footer from './components/Footer'
import NotFound from './Pages/NotFound'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Kids from './Pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white  '>
      <Nabar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product' element={<Product/>}>
       <Route path='men' element={<Men/>}/>
       <Route path='women' element={<Women/>}/>
       <Route path='Kids' element={<Kids/>}/>
       </Route>
       
       <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
