import { BUY_NOW_CHECKOUT,DELETE_CHECKOUT_DATA,UPDATE_CHECKOUT_ITEMS,CART_CHECKOUT } from "../actionTypes/ActionTypes";

const initialState = {
    bought : [],
    items : 1,
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

        case UPDATE_CHECKOUT_ITEMS:
            return{
                ...state,
                items : action.payload,
            }

        case CART_CHECKOUT:
            return{
                ...state,
                bought : action.payload,
            }

        default:
            return state;
    }
}

export default checkOutReducer;