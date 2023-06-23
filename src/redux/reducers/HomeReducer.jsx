import { ADD_DATA,FILTER_DATA,SET_SEARCHTERM,SET_DROPDOWNFILTER,SET_CLICKED } from "../actionTypes/ActionTypes";

const initialState = {
    searchTerm : '',
    data : [],
    filtered : [],
    dropDownFilter : '',
    clicked : false,
}

const homeReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_DATA:
            return{
                ...state,
               data : action.payload,
            }
        
        case FILTER_DATA:
            return{
                ...state,
                filtered : action.payload,

            }

        case SET_SEARCHTERM:
            return{
                ...state,
                searchTerm : action.payload,
    
            }

        case SET_DROPDOWNFILTER:
            return{
                ...state,
                dropDownFilter : action.payload,
        
            }

        case SET_CLICKED:
            return{
                ...state,
                clicked : action.payload,
            
            }
            
        
        default:
            return state;
    }
}

export default homeReducer;