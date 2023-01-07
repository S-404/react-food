import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    menu: [],
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload
        }
    }
})

export default restaurantSlice.reducer
export const {setMenu} = restaurantSlice.actions