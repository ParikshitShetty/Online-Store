import { ADD_TO_CART,DELETE_FROM_CART, SIGN_IN, SIGN_UP } from "../actionTypes/ActionTypes";


const addToCart = (item) =>{
    return{
        type: ADD_TO_CART,
        payload : item,

    }
}

const deleteFromCart = (updated) =>{
    return{
        type: DELETE_FROM_CART,
        payload : updated,
    }
}

export {addToCart,deleteFromCart};