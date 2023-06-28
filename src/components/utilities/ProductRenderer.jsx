import React from "react";
import { useNavigate } from "react-router-dom";


const ProductRenderer = ({currentPosts,filteredProducts,handleCheckOut,hanldeAddToCart,handleview,clicked}) =>{
    const navigate = useNavigate()

    return(
        <>
        <div className="mx-auto grid grid-cols-2 flex-1 overflow-y-auto p-5">
                {filteredProducts.length > 0 && clicked
                
                ?
                
                filteredProducts.map(filteredData =>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3" key={filteredData.id}>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={filteredData.image} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={e=>handleview(filteredData)}>{filteredData.title}</h5>

                        <span className="relative inline-flex items-center justify-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="relative inline-flex mb-2 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{filteredData.rating.rate}</p>
                            </span>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{filteredData.description}</p>
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${filteredData.price}</h4>
                        <span>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={e => navigate('/checkout')}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Buy Now
                                </span>

                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={e => hanldeAddToCart(filteredData)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Add to Cart
                                </span>
                            </button>
                            </span>
                    </div>
                </div>
                    )
                :
                currentPosts.map((api,index)=>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3" key={api.id}>
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={api.image} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={e=>handleview(api)}>{api.title}</h5>
                            <span className="relative inline-flex items-center justify-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="relative inline-flex mb-2 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{api.rating.rate}</p>
                            </span>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{api.description}</p>
                            
                                <span className="relative inline-flex items-center justify-center">
                                <h4 className="relative inline-flex mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white justify-center">${api.price}</h4>
                                </span>

                            <span>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={(e) => handleCheckOut(api)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Buy Now
                                </span>
                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={e => hanldeAddToCart(api)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Add to Cart
                                </span>
                            </button>
                            </span>
                        </div>
                    </div>
                    )
                }
                </div>
            
        </>
    )
}
export default ProductRenderer;