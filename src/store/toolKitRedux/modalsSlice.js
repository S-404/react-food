import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    locationVisible: false,
    navCartMenu: false,
    productInfo: false,
    navMenu: false,
    purchase: false,
}

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setLocationVisible: (state, action) => {
            state.locationVisible = action.payload
        },
        setNavCartMenuVisible: (state, action) => {
            state.navCartMenu = action.payload
        },
        setNavMenuVisible: (state, action) => {
            state.navMenu = action.payload
        },
        setProductInfoVisible: (state, action) => {
            state.productInfo = action.payload
        },
        setPurchaseVisible: (state, action) => {
            state.purchase = action.payload
        },
    }
})

export default modalsSlice.reducer
export const {
    setLocationVisible,
    setNavCartMenuVisible,
    setProductInfoVisible,
    setNavMenuVisible,
    setPurchaseVisible,
} = modalsSlice.actions