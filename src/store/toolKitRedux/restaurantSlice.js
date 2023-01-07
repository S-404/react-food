import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    menu: [],
    refs: {},
    selectedProduct: {}
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
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    }
})

export default restaurantSlice.reducer
export const {setMenu, setMenuRef,setSelectedProduct} = restaurantSlice.actions