import { ADD_TO_CART,DELETE_FROM_CART } from "../actionTypes/ActionTypes";

const initialState = {
     cart : [],
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cart : action.payload,
                
            }
    //     case ADD_TO_CART:
    //   const { payload: element } = action;
    //   if (!state.cart.includes(element)) {
    //     return {
    //       ...state,
    //       cart: [...state.cart, element],
    //     };
    //   }
    //   return state;

        case DELETE_FROM_CART:
            return{
                ...state,
                cart : action.payload,
            }

        default:
            return state;
    }
}

export default cartReducer;