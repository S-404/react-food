import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    list: [],
    selectedRestaurantId: 1, // default 1 , until the restaurant selection page is implemented
    menu: [],
    refs: {},
    selectedProduct: {},
    data: {},
    offer: {},
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        },
        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurantId = action.payload.id
            state.data = action.payload
        },
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
        },
        setOffer: (state, action) => {
            state.offer = action.payload
        },
    }
})

export default restaurantSlice.reducer
export const {
    setMenu,
    setMenuRef,
    setSelectedProduct,
    setData,
    setOffer,
    setList,
    setSelectedRestaurant
} = restaurantSlice.actions