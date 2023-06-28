import { BUY_NOW_CHECKOUT,DELETE_CHECKOUT_DATA } from "../actionTypes/ActionTypes";

const productCheckout = (data) =>{
    return{
        type: BUY_NOW_CHECKOUT,
        payload : data,

    }
}

const checkoutDeleter = (empty) =>{
    return{
        type: DELETE_CHECKOUT_DATA,
        payload : empty,

    }
}
export {productCheckout,checkoutDeleter}