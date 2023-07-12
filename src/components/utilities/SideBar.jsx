import React, { useEffect, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";


const SideBar = ({side,setSide,currentPage,setCurrentPage}) =>{

   const [filter,setFilter] = useState(false)

   const [updater,setUpdater] = useState(false)

   const navigate = useNavigate()

   const homeData = useSelector(state => state.homeReducer)

   //console.log(homeData.dropDownFilter)

   // useEffect(()=>{
   //    console.log(currentPage)

   //    const u = () =>{
   //       if(currentPage < 10){
   //       setCurrentPage(prevPage => prevPage+1);
   //       }
   //       console.log(currentPage)
   //    }
      
      
   //    const interval = setInterval(() => {
   //          u(); 
   //      }, 2000);
   
   //      return () => {
   //       clearInterval(interval);
   //     };
      
   // },[updater])
   

    return(
        <>

<aside id="sidebar-multi-level-sidebar" className="py-8 flex flex-col min-h-min top-0 left-0 z-40 w-52 rounded-l-lg transition-transform" aria-label="Sidebar">
   <div className="flex h-full relative overflow-y-auto bg-gray-50 dark:bg-gray-800  ">
      <ul className="flex flex-col space-y-2 font-medium">
         <li className="flex">
            <div className="w-3/4">
               <h3 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Side Bar</h3>
            </div>
            <div className="w-1/4 mt-3 ml-12">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  dark:stroke-gray-100" onClick={e => setSide(!side)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </div>
         </li>
         
         <li className="flex">
            <div className="w-3/4">
            <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={(e)=> setSide(!side)}>
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </button>
            </div>

            <div className="w-1/4 mt-3 ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:stroke-white" onClick={e => setFilter(!filter)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
               </svg>
            </div>
            
         </li>
         {filter && 
          <li>
            <Dropdown filter={filter}/>
         </li>
         }

         <li>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex items-center w-6 h-6 stroke-black dark:stroke-slate-50" onClick={e => setUpdater(!updater)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
         </svg>
         </li>
         
         <li>
            <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={e => navigate('/login')}>
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={(e)=>navigate('/signup')}>
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

        </>
    )
}
export default SideBar;