import { useEffect, useState } from 'react'
import Up from './components/SignUp'
import { Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import In from './components/SignIn'



function App() {
  

  const products = () =>{
    
  }

 



  return (
    <>
      <div className='text-center ' > 

      <Routes>
        <Route path='/signup' element={<Up></Up>} />
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<In></In>}/>
      </Routes>
      
        
        

      </div>
      
    </>
  )
}

export default App
