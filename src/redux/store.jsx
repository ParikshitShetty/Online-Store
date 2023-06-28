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




const rootReducer = combineReducers({
    cartReducer,
    userReducer,
    homeReducer,
    checkOutReducer,
    shippingReducer,
    ViewReducer,
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist: [shippingReducer,userReducer,homeReducer],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


    const store = configureStore({
        reducer:persistedReducer,
        middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck:{
                    ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
                }
            })
     });
    

export default store;