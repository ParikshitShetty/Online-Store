import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendShippingData } from "../redux/actions/ShiipingAction";
import { toast,ToastContainer } from "react-toastify";
import { checkoutDeleter } from "../redux/actions/CheckOutAction";
import { deleteFromCart } from "../redux/actions/CartAction";


const Checkout = (props) =>{

    const navigate = useNavigate()

    const checkoutData = useSelector(state => state.checkOutReducer)

    const userData = useSelector(state => state.shippingReducer)

    const cart = useSelector(state => state.cartReducer)

    const dispatch = useDispatch()

    const [shippingDetails,setShippingDetails] = useState({
        firstName : '',
        lastName : '',
        email : '',
        address : '',
        city : '',
        postCode : '',
        notes : '', 
    } )

    const [save , setSave] = useState(false)

    console.log(typeof(checkoutData))

    const handleShippingData = (e) =>{
        const {name, value} = e.target;
        setShippingDetails((shippingDetails)=>{
            return{...shippingDetails,[name]: value}
        })
    }
   
    const saveData = () =>{
        dispatch(sendShippingData(shippingDetails))
        toast.success("Order Placed",{
            position : toast.POSITION.TOP_LEFT,
        });
        // for (var key in cart.cart) {
        //     console.log(cart.cart[key].id)
        //         const updatedArray = Object.assign([],cart.cart)
        //         updatedArray.splice(cart.cart.indexOf(cart.cart[key].id),1)
        //         //console.log("find",cart.cart.findIndex(cart.cart[key]))
        //         dispatch(deleteFromCart(updatedArray))
        //     }
        navigate('/')
    };

    const formSubmit = (e) =>{
        e.preventDefault()
    }

    const cancelProcess = () =>{
        let res = Object.assign([],checkoutData.bought)
        res = []
        dispatch(checkoutDeleter(res))
        const timer = setTimeout(() => {
           navigate('/')
          }, 1500);
    }
    console.log(cart.cart)
    console.log(checkoutData.bought)

    
    console.log("reducer",userData.ShippingData)
    console.log("state",shippingDetails)

    return(
        <>
        <ToastContainer/>

        <div className="container p-12 mx-auto bg-slate-200">
        <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
                Ecommerce Checkout Page 
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={e => navigate(-1)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" onSubmit={formSubmit}>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData}/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="lastName" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData}/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="email" type="email" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData}/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="address" cols="20" rows="4" placeholder="Address" onChange={handleShippingData}></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData}/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postCode" type="number" placeholder="Post Code"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData}/>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <label className="flex items-center text-sm group text-heading">
                                    <input type="checkbox" name="save"
                                        className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" onChange={e => setSave(!save)}/>
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500" > Notes
                                    (Optional)</label><textarea name="notes"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery" onChange={handleShippingData}></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" onClick={saveData}>Place Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            
                <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <h2 className="text-xl font-bold">Order Summary
                        </h2>
                        <div className="mt-8">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src={checkoutData.bought.image} alt="image"
                                            className="w-60"/>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">{checkoutData.bought.title}</h2>
                                        {/* <p className="text-sm">Lorem ipsum dolor sit amet, tet</p> */}
                                        <span className="text-red-600">Price</span>${checkoutData.bought.price}
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" onClick={cancelProcess}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className="ml-2">${checkoutData.bought.price}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-2">${0.18*checkoutData.bought.price}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2">${0.18*checkoutData.bought.price + checkoutData.bought.price}</span></div>
                    </div>
                </div>
                
            </div>
            </div>
            
        </>
    )
}
export default Checkout;