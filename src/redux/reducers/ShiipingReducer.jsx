import { SAVE_SHIPPING_DATA } from "../actionTypes/ActionTypes";

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
}

const shippingReducer = (state = initialState, action) =>{
    switch(action.type){
        case SAVE_SHIPPING_DATA:
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
            }

        default:
            return state;
    }
}

export default shippingReducer;