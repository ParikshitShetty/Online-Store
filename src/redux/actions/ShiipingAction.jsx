import { SAVE_SHIPPING_DATA,SEND_SHIPPING_DATA } from "../actionTypes/ActionTypes";

const sendShippingData = (shippingDetails) =>{
    return{
        type: SEND_SHIPPING_DATA,
        payload : shippingDetails,

    }
}

const saveShippingData = (val) =>{
    return{
        type: SAVE_SHIPPING_DATA,
        payload : val,

    }
}

export {sendShippingData,saveShippingData};