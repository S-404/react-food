import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            let itemIndex = state.cartItems.findIndex(item =>  item.id === action.payload.id)

            if (itemIndex === -1) {
                state.cartItems.push({
                    ...action.payload,
                    cartItemQty: 1
                })
            } else {
                state.cartItems[itemIndex].cartItemQty += 1
            }

        },
        removeFromCart: (state, action) => {
            let itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (itemIndex !== -1) {
                if (state.cartItems[itemIndex].cartItemQty === 1) {
                    state.cartItems.splice(itemIndex, 1)
                } else {
                    state.cartItems[itemIndex].cartItemQty -= 1
                }

            }
        },
        clearCart: (state) => {
            state.cartItems.length = 0
        }
    }
})

export default cartSlice.reducer
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions