import { SIGN_UP } from "../actionTypes/ActionTypes";


const signUpUser = (first,second,mail,pass) =>{
    return{
        type: SIGN_UP,
        payload : {
            first,
            second,
            mail,
            pass,
        }
    }
}

export {signUpUser};