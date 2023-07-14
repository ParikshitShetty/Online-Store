import { SIGN_IN,SAVE_SIGN_IN_DATA,SAVE_LOGGED_IN } from "../actionTypes/ActionTypes";

const initialState = {
    SignInData : {
        email : '',
        password : '',
    },
    saved : false,
    logged : false,
}

const signInReducer = (state = initialState, action) =>{
    switch(action.type){
        case SIGN_IN:
            return{
                ...state,
                SignInData : {
                    email       :     action.payload.userName,
                    password    :   action.payload.password,
                },
            }
        case SAVE_SIGN_IN_DATA:
            return{
                ...state,
                    saved : action.payload,
                }
        case SAVE_LOGGED_IN:
            return{
                ...state,
                    logged : action.payload,
                }
        default:
            return state;
    }
}

export default signInReducer;