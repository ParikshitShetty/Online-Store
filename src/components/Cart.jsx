import React from "react";
import { deleteFromCart } from "../redux/actions/CartAction";
import Navbar from "./utilities/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutItemUpdater, productCheckout,cartCheckout } from "../redux/actions/CheckOutAction";
import { viewAdder } from "../redux/actions/VIewAction";



const Cart = () =>{

    const cart = useSelector(state => state.cartReducer)

    const data = useSelector(state => state.checkOutReducer)

    const dispatch = useDispatch()

    const navigateBack = useNavigate()
    
    const navigate = useNavigate()

    const handleRemove = (id) =>{
        const updatedArray = Object.assign([],cart.cart)
        updatedArray.splice(id,1)
        dispatch(deleteFromCart(updatedArray))
    }

    const handleCheckOut = (check) =>{
        //console.log(data.bought)
        dispatch(productCheckout(check))
        dispatch(checkoutItemUpdater(1))
        navigate('/checkout')    
    }

    const handleMultipleCheckOut = () =>{
        console.log(data)
        console.log(cart.cart)

        let arr = []
        let count = 0;
        cart.cart.forEach(element => {
            //console.log(element)
            arr.push(element) 
            count++;   
        });
        if(cart.cart.length > 1){
            dispatch(cartCheckout(arr))
        }
        else{
            cart.cart.map((element)=>{
                cartCheckout(element)
            })
        }
        
        dispatch(checkoutItemUpdater(count))
        navigate('/checkout')
    }

    const handleview = (view) =>{
        dispatch(viewAdder(view))
        console.log(view)
        navigate('/productview')
    }
    console.log(data)

    return(
        <>
           <div className="flex flex-col">
           
            <Navbar></Navbar>
            <svg className="relative top-0 left-0 ml-2 mt-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" onClick={()=>navigateBack(-1)}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
           
                
            <div className={`flex-1 grid sm:grid-cols-1 md:grid-cols-1 md:max-xl lg:grid-cols-2 gap-4 overflow-y-auto p-5 mx-auto       md:shrink-0 transition-transform ease-in-out`}>
        
                

                {cart.cart.map((item,index)=>
                <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 m-3" key={index}>
                        
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg transition ease-in-out md:z-10  duration-300 " src={item.image} alt="product image"/>

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={(e)=>handleview(item)}>{item.title}</h5>
                            <span className="relative inline-flex items-center justify-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="relative inline-flex ml-1 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{item.rating.rate}</p>
                            </span>

                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                            
                                <span className="relative inline-flex items-center justify-center">
                                <h4 className="relative inline-flex mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white justify-center">${item.price}</h4>
                                </span>

                    <span className="mt-2">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 px-3 py-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={e =>handleCheckOut(item)}>
                                <span  className="w-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                        Buy Now
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </span>
                        </button>
                                
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-200" onClick={()=>handleRemove(index)}>

                            <span className="w-auto inline-flex items-center ">
                                Remove
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </span>
                        </button>
                    </span>
                        </div>
                </div>
                )}     
            </div> 
            </div> 
            <div className="relative overflow-visible flex justify-end md:mr-40">
                <button className="" onClick={handleMultipleCheckOut}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12 stroke-black dark:stroke-white stroke-2 active:fill-lime-500" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                    
                </div>
        </>
    )
}

export default Cart;