import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    locationVisible: false,
}

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setLocationVisible: (state, action) => {
            state.locationVisible = action.payload
        }
    }
})

export default modalsSlice.reducer
export const {setLocationVisible} = modalsSlice.actions