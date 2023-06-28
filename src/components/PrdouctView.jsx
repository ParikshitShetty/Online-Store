import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./utilities/Navbar";
import { useNavigate } from "react-router-dom";
import { productCheckout } from "../redux/actions/CheckOutAction";


const ProductView = () =>{
    const viewData = useSelector(state => state.ViewReducer)

    const dispatch = useDispatch()

    console.log(viewData.view)

    const navigate = useNavigate()

    const handleBuy = (check) =>{
        //console.log(checkOutData)
        dispatch(productCheckout(check))
        navigate('/checkout')    
    }

    return(
        <>
        <div className="bg-grey-light font-sans leading-normal tracking-normal">
	{/* <!--Nav--> */}
	<Navbar/>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={e => navigate(-1)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            
	{/* <!--Hero--> */}
	

		{/* <!--Left Col--> */}
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
			<h2 className="uppercase tracking-loose font-semibold">{viewData.view.title}</h2>
			
			<p className="leading-normal mb-4 font-normal">{viewData.view.description}</p>
            <span>
            <p className="flex-start">{viewData.view.rating.rate}</p>
            <p className="flex-end">{viewData.view.rating.count}</p>
            </span>
            

            <h6>${viewData.view.price}</h6>
            
			<button className=" flex-items-center bg-transparent hover:bg-black text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent" onClick={e => handleBuy(viewData.view)}>Buy Now</button>
		</div>
		{/* <!--Right Col--> */}
		<div className="w-full lg:w-1/2 lg:py-6 text-center">
			{/* <!--Add your product image here--> */}
            <img src={viewData.view.image} alt="product image" className="relative mx-auto object-fill w-5/5" />
		</div>
	</div>
</div>


        </>
    )
}
export default ProductView;