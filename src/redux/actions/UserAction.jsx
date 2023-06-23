import { SIGN_IN,SIGN_UP } from "../actionTypes/ActionTypes";

const signInUser = () =>{
    return{
        type: SIGN_IN,
        payload:{

        }

    }
}

const signUpUser = (det) =>{
    return{
        type: SIGN_UP,
        payload : det

    }
}

export {signInUser,signUpUser};