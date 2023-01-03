import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolKitReducer from "./toolKitReducer"
import modalsSlice from "./modalsSlice";


const rootReducer = combineReducers({
    toolkit: toolKitReducer,
    modals: modalsSlice
})

export const store = configureStore({
    reducer: rootReducer,
})