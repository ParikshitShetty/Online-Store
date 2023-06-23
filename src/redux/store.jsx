import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/UserSignReducer";
import homeReducer from "./reducers/HomeReducer";
import { persistReducer,
     persistStore, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER
     } from "redux-persist";
import storage from 'redux-persist/lib/storage';




const rootReducer = combineReducers({
    cartReducer,
    userReducer,
    homeReducer

})

const persistConfig = {
    key : 'root',
    storage,
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




// const rootReducer = combineReducers({
//     cartReducer,
//     userReducer,
//     homeReducer

// })

// const store = configureStore({reducer:rootReducer   });

// export default store;