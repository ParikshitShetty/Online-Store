import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApiData,filterApiData,changeClick } from "../redux/actions/HomeAction";
import Navbar from "./utilities/Navbar";
import { addToCart } from "../redux/actions/CartAction";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";

const Home = () =>{

    const apiResp = useSelector(state => state.homeReducer )

    const cartData = useSelector(state => state.cartReducer)

    const dispatch = useDispatch();

    const term = apiResp.searchTerm

    const filteredProducts = apiResp.filtered

    let searchResults = []

    const cartItems = cartData.cart

    document.title = 'welcome to homepage';

    const handleSearch = () =>{
        if(term !== ''){
            searchResults = apiResp.data.filter((product) =>{
                return product.title.toLowerCase().includes(term.toLowerCase())
                
            })}
       
        dispatch(filterApiData(searchResults))
        dispatch(changeClick(true))
    }

    const hanldeAddToCart = (item) =>{
        if(!cartItems.includes(item)){
            dispatch(addToCart(item))

            toast.success("Item added to cart", {
                position: toast.POSITION.TOP_RIGHT  ,  
              });
        }
        else{
            toast.info("Item already in cart", {
                position: toast.POSITION.TOP_RIGHT  ,  
              });
            
        }
    }

    // useEffect(()=>{
    //     fetch(`https://fakestoreapi.com/products/`)
    // .then(res=>res.json())
    // .then(json=> dispatch(addApiData(json)))
      
    // },[])

    useEffect(()=>{
        if(term.length == 0 && apiResp.clicked == true){
            dispatch(changeClick(false))
        }
       
    },[term])

    

    

    return(
        <>
            <ToastContainer/>

            <div className="flex flex-col h-screen">
                <div className="">
                <Navbar handleSearch={handleSearch}></Navbar>      
                </div>
           
                   
            
            <div className="grid grid-cols-2 flex-1 overflow-y-auto p-5">
                {filteredProducts.length > 0 && apiResp.clicked
                
                ?
                
                filteredProducts.map(filteredData =>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3" key={filteredData.id}>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={filteredData.image} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{filteredData.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{filteredData.description}</p>
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${filteredData.price}</h4>
                        <button className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={e => hanldeAddToCart(filteredData)} >Add to Cart</button>
                        <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">hello</button>
                    </div>
                </div>
                    )
                :
                apiResp.data.map(api=>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3" key={api.id}>
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={api.image} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{api.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{api.description}</p>
                            <h4 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">${api.price}</h4>
                            <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2" onClick={e => hanldeAddToCart(api)}>Add to Cart</h4>

            
                           
                        </div>
                    </div>
                    )
                }
            
                </div>
                </div>
        </>
    );
};

export default Home;