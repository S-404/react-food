import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    locationVisible: false,
    navCartMenu: false
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
        }
    }
})

export default modalsSlice.reducer
export const {setLocationVisible, setNavCartMenuVisible} = modalsSlice.actions