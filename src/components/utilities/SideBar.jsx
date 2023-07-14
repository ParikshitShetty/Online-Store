import React, { useEffect, useState } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions/FilterAction";


const SideBar = ({side,setSide,currentPage,setCurrentPage,totalPosts,totalFilteredPosts,postsPerPage,clicked,setPostsPerPage,applyFilter}) =>{

   const homeData = useSelector(state => state.homeReducer)

   const filtdata = useSelector(state => state.filterReducer)

   const [filter,setFilter] = useState(false);

   const [updater,setUpdater] = useState(false);

   const [layoutUpdater, setLayoutUpdater] = useState(false);

   const navigate = useNavigate();

   const dispatch = useDispatch();

   let pagelength = totalPosts / postsPerPage;

   let filteredPageLength = totalFilteredPosts / postsPerPage;

   const layoutArray = ["select layout",2,4,6];

   //console.log(homeData.dropDownFilter)

   useEffect(()=>{
      const timer = setTimeout(() => {

         if(clicked && totalFilteredPosts>0){
            if(currentPage < filteredPageLength && updater){
               setCurrentPage(currentPage+1)
            }
            else if(currentPage == filteredPageLength && updater){
               setCurrentPage(1)
            }
         }
         else{
            if(currentPage<pagelength && updater){
               setCurrentPage(currentPage+1)
            }
            else if(currentPage == pagelength & updater){
               setCurrentPage(1)
            }
         } 
       }, 1500);
       return () => clearTimeout(timer);
      
   },[currentPage,updater])

   // useEffect(() => {
   //    dispatch(setFilter())
   //    console.log(filter)
   // }, [filter])
   

   const layout = (setter)=>{
      if(typeof(setter)=='number'){
         setPostsPerPage(setter)
      }
      
   }

    return(
        <>

<aside id="sidebar-multi-level-sidebar" className="py-8 flex flex-col min-h-min top-0 left-0 z-40 w-52 rounded-l-lg transition-transform" aria-label="Sidebar">
   <div className="flex h-full relative overflow-y-auto bg-zinc-300 dark:bg-gray-800 rounded-r-md">
      <ul className="flex flex-col space-y-2 font-medium">
         <li className="flex">
            <div className="w-3/4 mt-0.5">
               <h3 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Side Bar</h3>
            </div>
            <div className="w-1/4 mt-3 ml-12">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  dark:stroke-gray-100" onClick={e => setSide(!side)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
            </div>
         </li>
         
         <li className="flex">
            <div className="w-full">
            <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"  onClick={e => setUpdater(!updater)}>
               
               <span className="flex-1 ml-3 mr-12 whitespace-nowrap" >Products</span>

               {updater ?
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 stroke-black dark:stroke-slate-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
               </svg>
               :
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex items-center w-6 h-6 ml-3 stroke-black dark:stroke-slate-50" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
               </svg>
            }
            </button>
            </div>  
         </li>

         <li className="flex">
         <div className="w-full ml-3">
         <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setFilter(!filter)}>
            <span className="flex-1 mr-12 whitespace-nowrap" >Filter</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:stroke-white ml-9" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
               </svg>
            </button>
            </div> 
         </li>

         {filter && 
          <li>
            <Dropdown filter={filter}/>
         </li>
         }
         
         <li className="flex ml-3">
            <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={e=> setLayoutUpdater(!layoutUpdater)}>
            <span className=" dark:text-white" >Change Layout</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 dark:stroke-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            </button>
            
         </li>

         {layoutUpdater&&
         <li>
         <select className="w-5/6 ml-1 p-2.5 text-xl text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 text-center" >
               {layoutArray.map((num,index)=>
               <option key={index} onClick={e=>layout(num)}>{num}</option>
               )}
            </select>
         </li>
         }
        
      </ul>
   </div>
</aside>

        </>
    )
}
export default SideBar;