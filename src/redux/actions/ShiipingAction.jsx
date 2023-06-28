import { SAVE_SHIPPING_DATA } from "../actionTypes/ActionTypes";

const sendShippingData = (shippingDetails) =>{
    return{
        type: SAVE_SHIPPING_DATA,
        payload : shippingDetails,

    }
}

export {sendShippingData};