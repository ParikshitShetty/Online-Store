import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApiData,filterApiData,changeClick } from "../redux/actions/HomeAction";
import Navbar from "./utilities/Navbar";
import { addToCart } from "../redux/actions/CartAction";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { checkoutItemUpdater, productCheckout } from "../redux/actions/CheckOutAction";
import { viewAdder } from "../redux/actions/VIewAction";
import Pagination from "./utilities/Pagination";
import ProductRenderer from "./utilities/ProductRenderer";
import SideBar from "./utilities/SideBar";
import Filtered from "./utilities/Filtered";

const Home = () =>{

    const [currentPage,setCurrentPage] = useState(1)

    const [postsPerPage,setPostsPerPage] = useState(2)

    const [side,setSide] = useState(false)

    const apiResp = useSelector(state => state.homeReducer )

    const cartData = useSelector(state => state.cartReducer)

    const checkOutData = useSelector(state => state.checkOutReducer)

    const v = useSelector(state => state.ViewReducer)

    const sign = useSelector(state => state.signInReducer)

    const filterData = useSelector(state => state.filterReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const term = apiResp.searchTerm

    const products = apiResp.data

    const clicked = apiResp.clicked

    const filteredProducts = apiResp.filtered

    let searchResults = []

    // console.log('from reducer cartadder',cartAdder)

    const lastPostIndex = currentPage * postsPerPage;

    const firstPostIndex = lastPostIndex - postsPerPage;

    let currentPosts = apiResp.data.slice(firstPostIndex,lastPostIndex)

    let filteredPosts = apiResp.filtered.slice(firstPostIndex,lastPostIndex)

    console.log(sign)

    document.title = 'welcome to homepage';
     
    const handleAddToCart = (item) =>{
        let cartAdder = Object.assign([],cartData.cart)
                if(!cartAdder.includes(item)){
                    cartAdder.push(item)
                    console.log('after updated',cartAdder)
                    dispatch(addToCart(cartAdder))
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
    
    const handleCheckOut = (check) =>{
        //console.log(checkOutData)
        dispatch(productCheckout(check))
        dispatch(checkoutItemUpdater(1))
        navigate('/checkout')    
    }

    const handleview = (view) =>{
        dispatch(viewAdder(view))
        //console.log(v)
        navigate('/productview')
    }

    const applyFilter = () =>{
        
    }

    useEffect(()=>{
        // console.log(apiResp.dropDownFilter)
        // console.log(apiResp.tobeFiltered)
        let val =[]
        currentPosts = products.filter((item)=>item.category == apiResp.tobeFiltered)
        //console.log(currentPosts)
    },[apiResp.dropDownFilter,apiResp.tobeFiltered])

    const getData = async() =>{
        const url = await fetch(`https://fakestoreapi.com/products/`)
        const json = await url.json()
        dispatch(addApiData(json))
        //console.log(url)
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        if(term.length == 0 && apiResp.clicked == true){
            dispatch(changeClick(false))
        }
       
    },[term])

     //console.log(filterData.filter)
    // console.log(products)

    return(
        <>
            <ToastContainer autoClose={2500}/>

            <div className="flex flex-col min-h-screen ">
                <Navbar side={side} setSide={setSide}></Navbar>
            
                <div className=" flex flex-1 ">
                {side && <SideBar side={side} setSide={setSide} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={products.length} totalFilteredPosts={filteredProducts.length} postsPerPage={postsPerPage} clicked={clicked} setPostsPerPage={setPostsPerPage} applyFilter={applyFilter}/>}

                    {/* {filterData.filter ?
                    <Filtered handleCheckOut={handleCheckOut} handleAddToCart={handleAddToCart} handleview={handleview} />
                    :
                    
                    } */}
                    
                    <ProductRenderer currentPosts={currentPosts} filteredPosts={filteredPosts} filteredProducts={filteredProducts} handleCheckOut={handleCheckOut} handleAddToCart={handleAddToCart} handleview={handleview} clicked={clicked} term={term}/>

                </div>
                
                <div className="bg-slate-500 p-4">
                <Pagination totalPosts={products.length} totalFilteredPosts={filteredProducts.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} clicked={clicked}/>
                </div>
            </div>


                
        </>
    );
};

export default Home;