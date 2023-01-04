import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolKitReducer from "./toolKitReducer"
import modalsSlice from "./modalsSlice";
import userDataSlice from "./userDataSlice";
import cartSlice from "./cartSlice";


const rootReducer = combineReducers({
    toolkit: toolKitReducer,
    modals: modalsSlice,
    userData: userDataSlice,
    cart: cartSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})