import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropHandle, filterHandle } from "../../redux/actions/HomeAction";


const Dropdown = ({filter}) =>{

    const reducerData = useSelector(state => state.homeReducer) 
    
    const dispatch = useDispatch()

    const dropDownData = reducerData.dropDownFilter

    const [selected,setSelected] = useState('');

    const [data,setData] = useState('');

    const handleChange = (event) => {
        dispatch(dropHandle(event.target.value))
        setSelected(event.target.value);
        
      };

      const handleFilterChange = (e) =>{
        setData(e.target.value)
        dispatch(filterHandle(e.target.value));
      }
    //   console.log(selected)
    //   console.log(data)

    return(
    <>

        <div className="">
        
        <div className="relative w-auto m-2 lg:max-w-sm">

            {filter &&
            <select className="w-full p-2.5 text-gray-800 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 dark:bg-slate-900 dark:text-white text-center" placeholder="filter" value={dropDownData} onChange={handleChange}>
            
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Select an Filter</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="rating">Rating</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="price">Price</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="category">Category</option>

            </select>
            }
        </div>    
       

        {dropDownData == 'rating'?
        <div className="relative w-auto m-2 lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-800 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 dark:bg-slate-900 dark:text-white text-center" onChange={handleFilterChange}>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="Above 4.0">Above 4.0</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="Below 4.0">Below 4.0</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="Below 3.5">Below 3.5</option>
            </select>
        </div> 
        :
        dropDownData == 'price' ?
        <div className="relative w-auto m-2 lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-800 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 dark:bg-slate-900 dark:text-white text-center" onChange={handleFilterChange}>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="$10-$25">$10-$25</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="Below $100">Below $100</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="$100-$1000">$100-$1000</option>
            </select>
        </div> 
        :
        dropDownData == 'category' &&

        <div className="relative w-auto m-2 lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-800 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 dark:bg-slate-900 dark:text-white text-center" onChange={handleFilterChange}>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="men's clothing">men's clothing</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="jewelery">jewelery</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="electronics">electronics</option>
                <option className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" value="women's clothing">women's clothing</option>
            </select>
        </div>
        }
        </div>
        
    </>
    )
}

export default Dropdown;