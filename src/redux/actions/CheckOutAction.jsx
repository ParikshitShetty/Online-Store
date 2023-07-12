import { BUY_NOW_CHECKOUT,DELETE_CHECKOUT_DATA,UPDATE_CHECKOUT_ITEMS } from "../actionTypes/ActionTypes";

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

const checkoutItemUpdater = (val) =>{
    return{
        type: UPDATE_CHECKOUT_ITEMS,
        payload : val,

    }
}
export {productCheckout,checkoutDeleter,checkoutItemUpdater}