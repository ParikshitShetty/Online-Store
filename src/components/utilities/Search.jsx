import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/actions/HomeAction";

const Search = () =>{

    const searchData = useSelector(state => state.homeReducer.searchTerm) 
    
    const dispatch = useDispatch()

    

    return(
    <>
    <input type="search"
    placeholder="Search products...."
    className="block p-2.5 w-auto z-20 text-sm text-gray-900 bg-gray-50 rounded border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
    value={searchData}
    onChange={e => dispatch(setSearchTerm(e.target.value))}
     
    />
            

    </>
    )
}

export default Search;