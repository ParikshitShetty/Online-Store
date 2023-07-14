import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/UserSignReducer";
import homeReducer from "./reducers/HomeReducer";
import { persistReducer,
     persistStore, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER
     } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import checkOutReducer from "./reducers/CheckOutReducer";
import shippingReducer from "./reducers/ShiipingReducer";
import ViewReducer from "./reducers/ViewingProductsReducer";
import ThemeReducer from "./reducers/ThemeReducer";
import signInReducer from "./reducers/SignInReducer";
import filterReducer from "./reducers/FilterReducer";




const rootReducer = combineReducers({
    cartReducer,
    userReducer,
    homeReducer,
    checkOutReducer,
    shippingReducer,
    ViewReducer,
    ThemeReducer,
    signInReducer,
    filterReducer,
})

const persistConfig = {
    key : 'root',
    storage,
    blacklist : [cartReducer,homeReducer],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


    const store = configureStore({
        reducer:persistedReducer,
        middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck:{
                    ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
                }
            }),
     });

    

export default store;