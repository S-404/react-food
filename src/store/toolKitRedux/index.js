import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolKitReducer from "./toolKitReducer"
import modalsSlice from "./modalsSlice";
import userDataSlice from "./userDataSlice";


const rootReducer = combineReducers({
    toolkit: toolKitReducer,
    modals: modalsSlice,
    userData: userDataSlice
})

export const store = configureStore({
    reducer: rootReducer,
})