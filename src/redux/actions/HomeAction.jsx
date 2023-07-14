import { ADD_DATA,FILTER_DATA,SET_SEARCHTERM,SET_DROPDOWNFILTER,SET_CLICKED,SEC_FILTER } from "../actionTypes/ActionTypes";

const addApiData = (jsonData) =>{
    return{
        type: ADD_DATA,
        payload : jsonData,
    }
}

const filterApiData = (updatedList) =>{
    return{
        type : FILTER_DATA,
        payload : updatedList,
    }
}

const setSearchTerm = (value) =>{
    return{
        type : SET_SEARCHTERM,
        payload : value
    }
}

const dropHandle = (value) =>{
    return{
        type : SET_DROPDOWNFILTER,
        payload : value
    }
}

const changeClick = (clcickValue) =>{
    return{
        type : SET_CLICKED,
        payload : clcickValue
    }
}

const filterHandle = (value) =>{
    return{
        type : SEC_FILTER,
        payload : value,
    }
}

export 
 {  addApiData,
    filterApiData,
    setSearchTerm,
    dropHandle,
    changeClick,
    filterHandle,
};