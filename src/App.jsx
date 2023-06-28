import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Register from './components/SignUp'
import Login from './components/SignIn'
import Checkout from './components/Checkout'
import productView from './components/PrdouctView'
import ProductView from './components/PrdouctView'



function App() {


  return (
    <>
      <div className='text-center ' > 
      <Routes>
        <Route path='/signup' element={<Register></Register>} />
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/productview' element={<ProductView/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
