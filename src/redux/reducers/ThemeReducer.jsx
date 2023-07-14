import { THEME_UPDATER } from "../actionTypes/ActionTypes";

const initialState = {
    theme : false,
}

const ThemeReducer = (state = initialState, action) =>{
    switch(action.type){
        case THEME_UPDATER:
            return{
                ...state,
                theme : action.payload,
            }
            
        default:
            return state;
    }
}

export default ThemeReducer;