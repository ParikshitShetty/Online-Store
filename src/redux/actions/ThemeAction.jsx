import { THEME_UPDATER } from "../actionTypes/ActionTypes";

const ThemeSetter = (value) =>{
    return{
        type : THEME_UPDATER,
        payload : value,
    }
}

export {ThemeSetter};