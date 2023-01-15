import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolKitReducer from "./toolKitReducer"
import modalsSlice from "./modalsSlice";
import userDataSlice from "./userDataSlice";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantSlice";


const rootReducer = combineReducers({
    toolkit: toolKitReducer,
    modals: modalsSlice,
    userData: userDataSlice,
    cart: cartSlice,
    restaurant: restaurantSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})