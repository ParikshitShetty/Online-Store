import { SIGN_IN,SAVE_SIGN_IN_DATA,SAVE_LOGGED_IN } from "../actionTypes/ActionTypes";

const SignIn = (value) =>{
    return{
        type : SIGN_IN,
        payload : value,
    }
}

const saveSignIn = (field) =>{
    return{
        type : SAVE_SIGN_IN_DATA,
        payload : field,
    }
}

const saveLoggedIn = (log) =>{
    return{
        type : SAVE_LOGGED_IN,
        payload : log,
    }
}

export {saveSignIn,SignIn,saveLoggedIn};