import { BUY_NOW_CHECKOUT,DELETE_CHECKOUT_DATA } from "../actionTypes/ActionTypes";

const initialState = {
    bought : [],
}

const checkOutReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_NOW_CHECKOUT:
            return{
                ...state,
                bought : action.payload,
            }

        case DELETE_CHECKOUT_DATA:
            return{
                ...state,
                bought : action.payload,
            }

        default:
            return state;
    }
}

export default checkOutReducer;