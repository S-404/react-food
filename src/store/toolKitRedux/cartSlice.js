import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart: (state, action) => {
            let itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (itemIndex !== -1) {
                state.cartItems.splice(itemIndex, 1)
            }
        },
        clearCart:(state)=>{
            state.cartItems.length = 0
        }
    }
})

export default cartSlice.reducer
export const {addToCart,removeFromCart,clearCart} = cartSlice.actions