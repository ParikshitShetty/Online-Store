import { ADD_TO_CART,DELETE_FROM_CART } from "../actionTypes/ActionTypes";


const addToCart = (newArr) =>{
    return{
        type: ADD_TO_CART,
        payload : newArr,

    }
}

const deleteFromCart = (updated) =>{
    return{
        type: DELETE_FROM_CART,
        payload : updated,
    }
}


export {addToCart,deleteFromCart};