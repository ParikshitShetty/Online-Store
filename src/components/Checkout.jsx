import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingData, sendShippingData } from "../redux/actions/ShiipingAction";
import { toast,ToastContainer } from "react-toastify";
import { checkoutDeleter } from "../redux/actions/CheckOutAction";
import { deleteFromCart } from "../redux/actions/CartAction";


const Checkout = () =>{

    const navigate = useNavigate()

    const checkoutData = useSelector(state => state.checkOutReducer)

    const userData = useSelector(state => state.shippingReducer)

    const cart = useSelector(state => state.cartReducer)

    const dispatch = useDispatch();

    const location = useNavigate();

    const[price,setPrice] = useState(0)

    const[count,setCount] = useState(0)

    const[total,setTotal] = useState(0)

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

    // console.log(shippingDetails)
    // console.log(userData.ShippingData)
    
    const handleShippingData = (e) =>{
        const {name, value} = e.target;
        setShippingDetails((shippingDetails)=>{
            return{...shippingDetails,[name]: value}
        })
    }
   
    const saveData = () =>{
        toast.success("Order Placed",{
            position : toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
            if(userData.submitted){
                navigate(-1) 
            }   
        }, 1000);
        if (save) {
            dispatch(saveShippingData(save)) 
        }
        else{
            dispatch(saveShippingData(save))
        } 
    };

    const formSubmit = (e) =>{
        e.preventDefault()
        dispatch(sendShippingData(shippingDetails))
    }
        
    const cancelProcess = () =>{
        let res = []
        dispatch(checkoutDeleter(res))
        const timer = setTimeout(() => {
           navigate('/')
          }, 500);
    }

    useEffect(()=>{
        if (userData.saved) {
            setShippingDetails(()=>{
                return{
                    firstName : userData.ShippingData.firstName,
                    lastName : userData.ShippingData.lastName,
                    email : userData.ShippingData.email,
                    address : userData.ShippingData.address,
                    city : userData.ShippingData.city,
                    postCode : userData.ShippingData.postCode,
                    notes : userData.ShippingData.notes, 
                }
            })
        }
    },[])

    useEffect(()=>{
        if (checkoutData.bought.length>1) {
            setCount(checkoutData.bought.length)
        } else {
            setCount(checkoutData.items)
        }
        
    },[])
    
    useEffect(()=>{
        if(checkoutData.bought.length>1){
            let i = 0 ;
            checkoutData.bought.forEach(element => {
                i = i + element.price
                setPrice(i)
                setCount(checkoutData.items); 
                console.log(checkoutData.items)
            });
        }
        else{
            if (checkoutData.items > 1) {
               setCount(checkoutData.items) 
            }
            else{
                setCount(1)
            } 
            setPrice(checkoutData.bought.price);
        }
        setTotal(count*price);
        console.log(price)
    },[count])

    console.log(checkoutData)  
    console.log(userData)
   

    
    return(
        <>
        <div className="container p-12 mx-auto bg-slate-200 dark:bg-slate-600 max-w-screen-2xl">
        <ToastContainer/>
        <h1 className="flex items-center justify-center font-bold text-blue-600 dark:text-white text-md lg:text-3xl">
                Checkout Page 
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => navigate(-1)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading dark:text-white">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" onSubmit={formSubmit}>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4 dark:text-white">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name" value={shippingDetails.firstName}
                                        className="w-full px-4 py-3 text-sm border dark:bg-stone-700  border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData} required/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white">Last
                                        Name</label>
                                    <input name="lastName" type="text" placeholder="Last Name" value={shippingDetails.lastName}
                                        className="w-full px-4 py-3 text-sm border dark:bg-stone-700 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData} required/>
                                </div>
                            </div>
                            <div className="mt-4 dark:text-white">
                                <div className="w-full">
                                    <label htmlFor="email"
                                        className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white">Email</label>
                                    <input name="email" type="email" placeholder="Email" value={shippingDetails.email}
                                        className="w-full px-4 py-3 text-sm dark:bg-stone-700 border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={handleShippingData} required/>
                                </div>
                            </div>
                            <div className="mt-4 dark:text-white">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 dark:bg-stone-700 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" value={shippingDetails.address}
                                        name="address" cols="20" rows="4" placeholder="Address" onChange={handleShippingData} required></textarea>
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4 mt-3 dark:text-white">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city"
                                        className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white">City</label>
                                    <input name="city" type="text" placeholder="City" value={shippingDetails.city}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 dark:bg-stone-700 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required onChange={handleShippingData}/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white">
                                        Postcode</label>
                                    <input name="postCode" type="number" placeholder="Post Code" value={shippingDetails.postCode}
                                        className="w-full px-4 py-3 text-sm border border-gray-300 dark:bg-stone-700 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required onChange={handleShippingData}/>
                                </div>
                            </div>
                            <div className="flex items-center mt-4 dark:text-white">
                                <label className="flex items-center text-sm group text-heading dark:text-white">
                                    <input type="checkbox" name="save" 
                                        className="w-5 h-5 border border-gray-300 rounded dark:bg-stone-700 focus:outline-none focus:ring-1 " onChange={() => setSave(!save)}/>
                                    <span className="ml-2">Save this information for next time</span></label>
                            </div>
                            <div className="relative pt-3 xl:pt-6 dark:text-white"><label htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500 dark:text-white" > Notes
                                    (Optional)</label><textarea name="notes" value={shippingDetails.notes}
                                    className="flex items-center w-full px-4 py-3 text-sm border dark:bg-stone-700 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery" onChange={handleShippingData}></textarea>
                            </div>
        
                                <input type="submit" value="Place Order"
                                    className="w-full px-6 py-2 mt-6 text-blue-200 bg-blue-600 hover:bg-blue-900" onClick={saveData}/>
                        </div>
                    </form>
                </div>
            
                <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5 dark:text-white">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <h2 className="text-xl font-bold ">Order Summary
                        </h2>
                        <div className="mt-8">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-4">
                                    {checkoutData.bought.length > 1 ? checkoutData.bought.map((element,index)=>
                                        <div key={index}>
                                    <div>
                                        <img src={element.image} alt="image"
                                            className="w-60"/>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold ">{element.title}</h2>
                                        {/* <p className="text-sm">Lorem ipsum dolor sit amet, tet</p> */}
                                        <span className="text-red-600">Price</span>${element.price}
                                    </div>
                                    </div>
                                    )
                                    :

                                    <div >
                                    <div>
                                        <img src={checkoutData.bought.image} alt="image"
                                            className="w-60"/>
                                    </div>
                                    <div className="dark:text-white">
                                        <h2 className="text-xl font-bold ">{checkoutData.bought.title}</h2>
                                        {/* <p className="text-sm">Lorem ipsum dolor sit amet, tet</p> */}
                                        <span className="text-red-600 dark:text-red-400 ">Price</span>:${checkoutData.bought.price}
                                    </div>
                                    </div>
                                    }
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
                            <hr />
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold  border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            No.Of Itmes<span className=" ml-auto">{count}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold  border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className=" ml-auto">${parseInt(total)}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold  border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-auto">${parseInt(0.18 * total)}</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold  border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-auto">${parseInt(total+ 0.18 * total)}</span></div>
                    </div>
                </div>
                
            </div>
            </div>
            
        </>
    )
}
export default Checkout;