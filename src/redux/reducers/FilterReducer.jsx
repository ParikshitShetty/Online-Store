import { SET_FILTER } from "../actionTypes/ActionTypes";

const initialState = {
    filter : false,
}

const filterReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_FILTER:
            return{
                ...state,
                filter : !initialState.filter,
            }
        default:
            return state;
    }
}

export default filterReducer;