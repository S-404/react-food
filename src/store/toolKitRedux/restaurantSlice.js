import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    menu: [],
    refs: {}
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload
        },
        setMenuRef: (state, action) => {
            state.refs[action.payload.name] = action.payload.ref
        }
    }
})

export default restaurantSlice.reducer
export const {setMenu,setMenuRef} = restaurantSlice.actions