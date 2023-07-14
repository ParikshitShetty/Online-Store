import { SAVE_SHIPPING_DATA,SEND_SHIPPING_DATA } from "../actionTypes/ActionTypes";

const initialState = {
    ShippingData : {
        firstName : '',
        lastName : '',
        email : '',
        address : '',
        city : '',
        postCode : '',
        notes : '', 
    },
    saved : false,
    submitted : false,
}

const shippingReducer = (state = initialState, action) =>{
    switch(action.type){
        case SEND_SHIPPING_DATA:
            return{
                ...state,
                ShippingData : {
                    firstName   : action.payload.firstName,
                    lastName    :  action.payload.lastName,
                    email       :     action.payload.email,
                    address     :   action.payload.address,
                    city        :      action.payload.city,
                    postCode    :  action.payload.postCode,
                    notes       :     action.payload.notes,
                },
                submitted: !initialState.submitted,
            }
        case SAVE_SHIPPING_DATA:
            return{
                ...state,
                saved : action.payload,

            }

        default:
            return state;
    }
}

export default shippingReducer;