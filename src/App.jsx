import { useEffect, useState } from 'react'
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Register from './components/SignUp'
import Login from './components/SignIn'
import Checkout from './components/Checkout'
import ProductView from './components/PrdouctView'
import { useSelector } from 'react-redux'
import signInReducer from './redux/reducers/SignInReducer'
import Filtered from './components/utilities/Filtered'


function App() {

  const theme = useSelector(state => state.ThemeReducer )

  const login = useSelector(state => state.signInReducer )

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    //console.log(login.saved)
    if (!login.saved) {
      navigate('/signup')
    }
  }, [])
  
  return (
    <>
      <div className={theme.theme ? 'text-center bg-slate-400 min-h-screen dark' :'text-center bg-gray-400 min-h-screen'}>
      <Routes>
        <Route path='/signup' element={<Register></Register>} />
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/productview' element={<ProductView/>}/>
        <Route path='/a' element={<Filtered/>}/>    
      </Routes>
      </div>
      
    </>
  )
}

export default App
