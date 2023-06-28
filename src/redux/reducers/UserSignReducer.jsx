import {SIGN_UP } from "../actionTypes/ActionTypes"


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
                user : {
                    firstName : action.payload.first,
                    lastName : action.payload.second,
                    email : action.payload.mail,
                    password : action.payload.pass,
                } ,
                formSubmitted : true,
            }
            
        default:
            return state;
    }
}

export default userReducer;