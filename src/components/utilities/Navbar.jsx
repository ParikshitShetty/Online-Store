import React, { useEffect, useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeClick, filterApiData } from "../../redux/actions/HomeAction";
import { ThemeSetter } from "../../redux/actions/ThemeAction";
import { saveSignIn,saveLoggedIn } from "../../redux/actions/SignInAction";

const Navbar = ({side,setSide}) =>{

    const cartData = useSelector(state => state.cartReducer)

    const apiResp = useSelector(state => state.homeReducer )

    const theme = useSelector(state => state.ThemeReducer )

    const data = useSelector(state => state.userReducer )

    const [buttonClick,setButtonClick] = useState(false)

    const navigator = useNavigate()

    const location= useLocation();

    const term = apiResp.searchTerm

    let searchResults = []

    const dispatch = useDispatch();
    
    let Links =[
      {name:"HOME",link:"/"},
      {name:"CART",link:"/cart"},
      {name:"LOGOUT",link:"/login"},
    ];
    //console.log(cartData.cart.length)

    let FilteredLinks = [
      {name:"HOME",link:"/"},
      {name:"CART",link:"/cart"},
      {name:"LOGOUT",link:"/login"},
    ];

    const handleSearch = () =>{
      if(term !== ''){
          searchResults = apiResp.data.filter((product) =>{
              return product.title.toLowerCase().includes(term.toLowerCase())   
          })}
     
      dispatch(filterApiData(searchResults))
      dispatch(changeClick(true))
      if("/" !== location.pathname){
          navigator('/')
      }
    }

    const logOut = (route) =>{
        //dispatch(saveSignIn(false))
        dispatch(saveLoggedIn(false))
        navigator(route)
    }

    return(
        <>
        
<nav className={`static w-full z-50 bg-zinc-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700`}>
  <div className="flex flex-row  sm:flex-row max-w-screen-2xl items-center p-4 sm:w-auto justify-start h-20">      
      <button onClick={() => setSide(!side)} className="items-start hidden sm:block md:block">
          <svg  className={side ? "w-6 h-6 inline-flex text-red-600 dark:text-teal-400" : "w-6 h-6 text-gray-800 dark:text-white"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
          </svg>
      </button>

      <div className="flex md:ml-7 sm:mt-0 mr-5 lg:mr-1">
      <span  className="flex self-center text-xl font-mono whitespace-nowrap  sm:ml-0  sm:mr-3 dark:text-gray-700"><Search></Search></span>
      </div>

      <div className="flex lg:ml-4 lg:mr-96 ">
      <button type="submit" className="inline-flex items-center py-2.5 px-3 text-sm  sm:mr-0 font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSearch}>
        <svg aria-hidden="true" className="w-auto h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <span>Search</span>
      </button>
      </div>
      
      
      <ul className=" hidden flex-shrink-0 sm:flex md:flex font-medium flex-wrap p-4 md:p-0 mt-4 lg:ml-80  sm:mt-0 border sm:left-0 sm:top-0  border-gray-800 rounded-lg bg-zinc-300 md:flex-row md:space-x-8  md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 " id="navbar-default">

      <li className="mt-2" onClick={()=> dispatch(ThemeSetter(!theme.theme))}>
        {!theme.theme ?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-black dark:stroke-white fill-yellow-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-black dark:stroke-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
      }
      
      </li>

      {FilteredLinks.map((link,index) => 
      <li className="items-center hidden sm:block md:block" key={index}>
         {link.name == 'CART'  ?
      <span  className="relative block py-2 pl-3  mt-1 text-white rounded  md:text-blue-700 md:p-0 md:dark:text-blue-500 md:dark:bg-transparent" aria-current="page" onClick={() => navigator(link.link)}>
        <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
          </svg>
           {cartData.cart.length > 0 &&
          <span className=" absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartData.cart.length}
          </span>}
      </span>
      :
      link.name == 'LOGOUT' ?
      <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={()=>logOut(link.link)}>
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
      :
      <span className="block py-2 pl-3 pr-4 mt-1   text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500  md:ark:bg-transparent" aria-current="page" onClick={()=>logOut(link.link)}>{link.name}</span>
      }
      </li>
      )}

      </ul>
    

    {buttonClick &&(
    <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in-out ${buttonClick ? 'top-20 ':'top-[-490px]'}`}>
      { Links.map((link) =>(
        
       <li className="md:ml-8 text-xl md:my-0 my-7 sm:hidden md:hidden" key={link.name}>
           {link.name == "LOGOUT" ?
          <span className="relative duration-500 text-gray-900 rounded md:bg-transparent md:text-gray-800 md:p-0 md:dark:text-blue-500 md:ark:bg-transparent" aria-current="page" onClick={() => logOut(link.link)}>{link.name}</span>
          :
          <span className="relative duration-500 text-gray-900 rounded md:bg-transparent md:text-gray-800 md:p-0 md:dark:text-blue-500 md:ark:bg-transparent" aria-current="page" onClick={() => navigator(link.link)}>{link.name}</span>
          }
        </li>
        ))}
              
    </ul>)}

    <div  className='inline-flex items-center text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
    <button data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center md:right-0 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setButtonClick(!buttonClick)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
    </div>
    </div>
    
  
</nav>


        </>
    )

}

export default Navbar;