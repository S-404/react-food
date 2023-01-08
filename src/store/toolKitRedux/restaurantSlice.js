import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    selectedRestaurantId: 1, // default 1 , until the restaurant selection page is implemented
    menu: [],
    refs: {},
    selectedProduct: {},
    data:{},
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
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
export const {setMenu, setMenuRef,setSelectedProduct,setData} = restaurantSlice.actions