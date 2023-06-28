import { VIEW_DATA } from "../actionTypes/ActionTypes";


const initialState = {
    view : [],
}

const ViewReducer = (state = initialState, action) =>{
    switch(action.type){
        case VIEW_DATA:
            return{
                ...state,
                view : action.payload,
            }

        default:
            return state;
    }
}

export default ViewReducer;