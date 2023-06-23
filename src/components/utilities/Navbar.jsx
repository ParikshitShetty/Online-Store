import React from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";



const Navbar = (props) =>{

    const cartData = useSelector(state => state.cartReducer)

    //console.log(cartData.cart.length)

    return(
        <>
        
<nav className="sticky w-full bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
    <div className="mx-auto"></div>

      <Dropdown></Dropdown>

      <span  className="self-center text-xl font-mono whitespace-nowrap dark:text-gray-700"><Search></Search></span>

      <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={props.handleSearch}>
            <svg aria-hidden="true" className="w-auto h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
        </button>



    
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping</span> */}

        
    
    <div className="hidden w-full md:block md:w-auto mx-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
          <a href="/"  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>

        <li>
        <a href="/cart" role="button" className="relative block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
          <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
            </svg>
            {cartData.cart.length > 0 &&
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartData.cart.length}
            </span>
            }
            
        </a>
        </li>

        <li>
        <a href="/signup"  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Sign Up</a>

        </li>

      </ul>
    </div>
  </div>
</nav>


        </>
    )

}

export default Navbar;