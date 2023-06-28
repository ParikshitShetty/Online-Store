import { VIEW_DATA } from "../actionTypes/ActionTypes";

const viewAdder = (view) =>{
   return{
    type : VIEW_DATA,
    payload : view ,
   }
}
export {viewAdder}