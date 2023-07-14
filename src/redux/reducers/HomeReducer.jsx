import { ADD_DATA,FILTER_DATA,SET_SEARCHTERM,SET_DROPDOWNFILTER,SET_CLICKED,SEC_FILTER } from "../actionTypes/ActionTypes";

const initialState = {
    searchTerm : '',
    data : [],
    filtered : [],
    dropDownFilter : '',
    tobeFiltered : '',
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
        case SEC_FILTER:
            return{
                ...state,
                tobeFiltered : action.payload,
                
            }            
        
        default:
            return state;
    }
}

export default homeReducer;