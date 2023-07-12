import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./utilities/Navbar";
import { useNavigate } from "react-router-dom";
import { checkoutItemUpdater, productCheckout } from "../redux/actions/CheckOutAction";
import { parse } from "postcss";
import { ToastContainer, toast } from "react-toastify";


const ProductView = () =>{

    const [noOfItems,setNoOfItems] = useState(1)

    const viewData = useSelector(state => state.ViewReducer)

    const dispatch = useDispatch()

    //console.log(viewData.view.rating.count)

    const navigate = useNavigate()

    const handleBuy = (check) =>{
        //console.log(checkOutData)
        dispatch(productCheckout(check))
        dispatch(checkoutItemUpdater(noOfItems))
        navigate('/checkout')    
    }

    const handleChange = (e) =>{
        if(parseInt(e.target.value) <= viewData.view.rating.count){
            setNoOfItems(parseInt(e.target.value))
        }
        else if(noOfItems < 10 && noOfItems != 1){
            setNoOfItems(1)
        }
        else if(noOfItems == viewData.view.rating.count){
            toast.error("We only have "+viewData.view.rating.count+" items in stock right now", {
                position: toast.POSITION.BOTTOM_CENTER  ,  
              });
        }
        else if(noOfItems == 1){
            toast.error("You have reached minimum order quantity", {
                position: toast.POSITION.BOTTOM_CENTER  ,  
              });
        }
        
    }

    const incDec = (param) =>{
        if(param == 'pos' && noOfItems < viewData.view.rating.count ){
            setNoOfItems(parseInt(noOfItems) + 1)
        }
        else if(param == 'neg' && noOfItems>1){
            setNoOfItems(parseInt(noOfItems) - 1)
        }
        else if(noOfItems == viewData.view.rating.count){
            toast.error("We only have "+viewData.view.rating.count+" items in stock right now", {
                position: toast.POSITION.BOTTOM_CENTER  ,  
              });
        }
        else if(noOfItems == 1){
            toast.error("You have reached minimum order quantity", {
                position: toast.POSITION.BOTTOM_CENTER  ,  
              });
        }
    }

    //console.log(noOfItems)

    return(
        <>

        <div className="flex flex-col items-center bg-grey-light font-sans leading-normal tracking-normal h-screen w-screen">
	        <Navbar/>
            <ToastContainer autoClose={3000}/>
         
            <div className="flex flex-col md:flex-row items-center justify-center relative m-6  bg-white border border-gray-200 rounded-lg shadow  0 dark:border-gray-700 dark:bg-gray-800  h-screen max-w-6xl">
            
               
                <div className=" flex md:w-2/5 w-auto">
                <img className="object-cover w-full rounded-lg h-96 md:h-3/4 md:w-full md:rounded-lg" src={viewData.view.image} alt="product image"/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-8 h-8 absolute top-0 left-0" onClick={e => navigate(-1)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </div>

                <div className="flex flex-col justify-evenly  leading-normal md:w-3/5 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{viewData.view.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{viewData.view.description}</p>

                    <span className="relative inline-flex items-center justify-center mb-3">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="relative inline-flex ml-1 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{viewData.view.rating.rate}</p>
                    </span>

                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 relative inline-flex stroke-slate-950 dark:stroke-slate-50" onClick={e => incDec('neg')}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>

                        <input type="text" className="relative inline-flex items-center justify-center text-center w-1/12  mr-3 ml-3 text-lg rounded-lg text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={noOfItems} onChange={handleChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-6 h-6 relative inline-flex stroke-slate-950 dark:stroke-slate-50" onClick={e => incDec('pos')} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>


                        <button className=" relative inline-flex items-center justify-center overflow-hidden text-lg p-0.5 py-2 px-4 ml-2 bg-cyan-500 hover:bg-lime-400 text-gray-950 rounded shadow hover:shadow-lg  border border-black hover:border-transparent" onClick={e => handleBuy(viewData.view)} >
                         Buy Now
                            <svg className="w-3.5 h-3.5 ml-2 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </span>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductView;