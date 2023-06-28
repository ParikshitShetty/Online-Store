import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApiData,filterApiData,changeClick } from "../redux/actions/HomeAction";
import Navbar from "./utilities/Navbar";
import { addToCart } from "../redux/actions/CartAction";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { productCheckout } from "../redux/actions/CheckOutAction";
import { viewAdder } from "../redux/actions/VIewAction";
import ProductView from "./PrdouctView";
import Pagination from "./utilities/Pagination";
import ProductRenderer from "./utilities/ProductRenderer";


const Home = () =>{

    const [currentPage,setCurrentPage] = useState(1)

    const [postsPerPage,setPostsPerPage] = useState(2)

    const apiResp = useSelector(state => state.homeReducer )

    const cartData = useSelector(state => state.cartReducer)

    const checkOutData = useSelector(state => state.checkOutReducer)

    const v = useSelector(state => state.ViewReducer)

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

    const currentPosts = apiResp.data.slice(firstPostIndex,lastPostIndex)

    console.log(products)

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
        let cartAdder = Object.assign([],cartData.cart)
            if(!cartAdder.includes(item)){
                cartAdder =[item,...cartAdder]
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
        console.log(checkOutData)
        dispatch(productCheckout(check))
        navigate('/checkout')    
    }

    const handleview = (view) =>{
        dispatch(viewAdder(view))
        console.log(v)
        navigate('/productview')
    }
    
    const getData = async() =>{
        const url = await fetch(`https://fakestoreapi.com/products/`)
        const json = await url.json()
        dispatch(addApiData(json))
    }

    useEffect(()=>{
    //     fetch(`https://fakestoreapi.com/products/`)
    // .then(res=>res.json())
    // .then(jsonData=>{ dispatch(addApiData(jsonData))
    //     console.log('api',jsonData)
    // })
      
    },[])

    useEffect(()=>{
        getData()
    },[])

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
                <ProductRenderer currentPosts={currentPosts} filteredProducts={filteredProducts} handleCheckOut={handleCheckOut} hanldeAddToCart={hanldeAddToCart} handleview={handleview} clicked={clicked}/>

                <Pagination totalPosts={products.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
                
        </>
    );
};

export default Home;