import { SIGN_IN,SIGN_UP } from "../actionTypes/ActionTypes"


const initialState = {
    user : {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
    },
    formSubmitted : false,
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case SIGN_UP:
            return{
                ...state,
                user :  action.payload,
                formSubmitted : true,

            }

        case SIGN_IN:
            return{

            }
            
        default:
            return state;
    }
}

export default userReducer;