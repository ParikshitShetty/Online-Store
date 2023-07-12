import React, { useEffect, useState } from "react"
import { useRef } from "react"

const Pagination = ({totalPosts,postsPerPage,currentPage,totalFilteredPosts,setCurrentPage,clicked,filteredPosts}) => {
    const [change,setChange] = useState(false)
    

    let pages = []
    for(let i = 1;i <= Math.ceil(totalPosts/postsPerPage);i++){
      pages.push(i)
    }

    let filteredPages = []
    for(let i = 1;i <= Math.ceil(totalFilteredPosts/postsPerPage);i++){
    filteredPages.push(i)
    }


    const Backward = (neg) =>{
      if(currentPage > 1){
      setCurrentPage(currentPage - neg)
      
      }
    }

    const Forward = (pos) =>{
      if(currentPage < pages.length && !change){
      setCurrentPage(currentPage + pos)
      }
      else if(currentPage < filteredPages.length && change){
        setCurrentPage(currentPage + pos)

      }
    }

    useEffect(()=>{
      if(totalFilteredPosts > 0 && clicked){
        setChange(true)
        
      }
      else{
        setChange(false)
      }

    },[filteredPages])

    useEffect(()=>{
     setCurrentPage(1)
     console.log('you suck')
    },[totalFilteredPosts > 0 && clicked])
   

    return(
      <>
  <nav aria-label="Page navigation">
  
  <ul className="inline-flex items-center -space-x-px sticky">
    <li>
      <button className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-stone-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white" onClick={()=>Backward(1)}>
        <span className="sr-only">Previous</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      </button>
    </li>

    {totalFilteredPosts > 0 && clicked ? 
    
      filteredPages.map((filt,index)=>
      <li key={index}>
        
        <button className={filt==currentPage ?'px-3 py-2 leading-tight border-gray-900 dark:border-gray-800 bg-lime-500 dark:bg-indigo-300' 
        :
        "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-slate-800 focus:bg-gray-100 focus:text-slate-800  "} 
        onClick={()=>setCurrentPage(filt)}>{filt}</button>
      </li>
      )
    :
      
      pages.map((page,index)=>
      
        <li key={index}>
          
          <button className={page==currentPage ?'px-3 py-2 leading-tight border-gray-900 dark:border-gray-800 bg-lime-500 dark:bg-indigo-300' 
          :
          "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-slate-800 focus:bg-gray-100 focus:text-slate-800  "} onClick={()=>setCurrentPage(page)}>{page}</button>
        </li>
        )
    }
    
   
    <li>
      <button className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-stone-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white" onClick={()=>Forward(1)}>
        <span className="sr-only">Next</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </button>
    </li>
    
  </ul>

</nav>

</>
)
}
export default Pagination;