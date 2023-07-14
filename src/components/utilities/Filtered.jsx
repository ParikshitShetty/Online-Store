import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";



const Filtered = ({handleCheckOut,handleAddToCart,handleview}) =>{

    let Posts = [];

    let arr = [];

    const apiResp = useSelector(state => state.homeReducer );

    Posts = apiResp.data.filter((item)=>item.category == apiResp.tobeFiltered)

    useEffect(()=>{
        console.log(apiResp.dropDownFilter)
        console.log(apiResp.tobeFiltered)

        Posts = apiResp.data.filter((item)=>item.category == apiResp.tobeFiltered)

        //arr =Posts.data.filter(atom => atom)

        console.log(Posts)
    },[apiResp.dropDownFilter,apiResp.tobeFiltered])

    return(
        <>
        <div className={`grid sm:grid-cols-1 md:grid-cols-1 md:max-xl lg:grid-cols-2 gap-4 overflow-y-auto p-5 mx-auto md:shrink-0 transition-transform ease-in-out`}>
            
            {Posts.map((item,index) =>
            <div className="flex flex-col items-center bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 m-3" key={index}>
                        
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg transition ease-in-out md:hover:translate-x-28 md:hover:scale-175 md:z-10  duration-300" src={item.image} alt="product image"/>

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={()=>handleview(item)}>{item.title}</h5>
                <span className="relative inline-flex items-center justify-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="relative inline-flex ml-1 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{item.rating.rate}</p>
                </span>
 
                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                
                    <span className="relative inline-flex items-center justify-center">
                    <h4 className="relative inline-flex mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white justify-center">${item.price}</h4>
                    </span>

                <span>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={() => handleCheckOut(item)}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Buy Now
                    </span>
                </button>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-slate-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={() => handleAddToCart(item)}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add to Cart
                    </span>
                </button>
                </span>
            </div>
        </div> 
            )}
        </div>
        </>
    )
}
export default Filtered;