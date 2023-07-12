import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const ProductRenderer = ({currentPosts,filteredPosts,filteredProducts,handleCheckOut,hanldeAddToCart,handleview,clicked}) =>{
    
    const navigate = useNavigate()

    const [readMore,setReadMore] = useState(false)
    const [id, setId] = useState(0)
    const [renderer, setRenderer] = useState(false)
    const [tail, setTail] = useState(false)
    const [count,setCount] = useState(0)

    const [results,setResults] =useState([])
    
    const setMore = (productId) =>{
        setReadMore(!readMore)
        setId(productId)
        setRenderer(true)
    }

    const updater = (param) =>{
      if (param == -1 && count > 0) {
          setCount(count - 1)
      }
      

      if(param == 1 && count < currentPosts.length-1){
          setCount(count+1)
      }
      // else{
      //   setCount(0)
      // }
  }

    useEffect(()=>{
        if(readMore){
        setReadMore(false)
        }
        setTail(false)
        setRenderer(false)
    },[currentPosts])

    // useEffect(()=>{
    //   let res = currentPosts.filter((post,index) => index==count)
    //   setResults(res)
    
    // },[count,currentPosts])
    

    
    // console.log(count)
    // console.log('posts',results)
    // console.log(currentPosts.length-1)
 
    return(
        <>
             <div className="grid sm:grid-cols-1 md:grid-cols-1 md:max-xl lg:grid-cols-2  gap-4 overflow-y-auto p-5 mx-auto md:shrink-0 transition-transform ease-in-out">
                    {filteredProducts.length > 0 && clicked
                
                    ?
                
                    filteredPosts.map(filteredData =>
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 m-3" key={filteredData.id}>
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg transition ease-in-out delay-150 hover:translate-x-28 hover:scale-175 z-10 duration-300" src={filteredData.image} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={e=>handleview(filteredData)}>{filteredData.title}</h5>

                        <span className="relative inline-flex items-center justify-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="relative inline-flex ml-1 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{filteredData.rating.rate}</p>
                            </span>

                        {filteredData.description.length > 140 ? 
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{filteredData.description.substring(0,140)}
                                    {!readMore && <span onClick={e => setMore(filteredData.id)}>...</span>}
                                    
                                    {readMore && id==filteredData.id ?
                                        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{filteredData.description.substring(140,filteredData.description.length)}</span>
                                        :
                                        renderer &&
                                        <span onClick={e => setTail(true)}>{!tail && '...'}</span>
                                        
                                    }
                                    <span>{tail && id !== filteredData.id && filteredData.description.substring(140,filteredData.description.length)}</span>
                                </p>
                                 :
                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{filteredData.description}</p>
                            }

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
                filteredProducts.length==0 && clicked ?
                            
                            <h1 className="font-bold text-center text-2xl font-serif">Sorry We Don't have what you are looking For.</h1>
                :

                currentPosts.map((api,index)=>

                
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 m-3" key={api.id}>
                        
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg transition ease-in-out delay-150 hover:translate-x-28 hover:scale-175 md:z-10  duration-300" src={api.image} alt="product image"/>

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" onClick={e=>handleview(api)}>{api.title}</h5>
                            <span className="relative inline-flex items-center justify-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-yellow-400 justify-items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="relative inline-flex ml-1 text-2xl  font-mono tracking-tight text-gray-900 dark:text-white justify-center">{api.rating.rate}</p>
                            </span>

                            
                            {api.description.length > 140 ? 
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{api.description.substring(0,140)}
                                    {!readMore && <span onClick={e => setMore(api.id)}>...</span>}
                                    
                                    {readMore && id==api.id ?
                                        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{api.description.substring(140,api.description.length)}</span>
                                        :
                                        renderer &&
                                        <span onClick={e => setTail(true)}>{!tail && '...'}</span>
                                    }
                                    <span>{tail && id !== api.id && api.description.substring(140,api.description.length)}</span>
                                </p>
                                 :
                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{api.description}</p>
                            }
                            
                                <span className="relative inline-flex items-center justify-center">
                                <h4 className="relative inline-flex mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white justify-center">${api.price}</h4>
                                </span>

                            <span>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={(e) => handleCheckOut(api)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Buy Now
                                </span>
                            </button>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-slate-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={e => hanldeAddToCart(api)}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Add to Cart
                                </span>
                            </button>
                            </span>
                        </div>
                    </div>
                )}
            </div>

                
              {/* <div
                id="carouselExampleCaptions"
                className=" py-5 "
                data-te-carousel-init
                data-te-carousel-slide>
  
  

  
  <div
    className="relative flex flex-col w-full overflow-hidden ">
    {results.map(item=>
        <div className="flex  justify-between">
          
            <div className="flex flex-col w-10/12" key={item.id}>
          
                <img
                src={item.image}
                className="block h-auto max-w-full"
                style={{ height: 600, width: 600 }}
                alt="..." />
            </div>
            <div className="flex flex-col justify-center ml-4 bg-green-300">
              <h5 className="text-xl font-semibold">{item.title}</h5>
              <p className="px-2 text-black md:block">
              {item.description}
              </p>
            </div>
          
        </div>
          )}
    
    
  </div>

  
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev" onClick={e=> updater(-1)}>
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Previous
      </span>
  </button>
  
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next" onClick={e=> updater(1)}>
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next
                </span>
            </button>
            </div> */}

            
        </>
    )
}
export default ProductRenderer;