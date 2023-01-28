import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import UserCartService from "../../api/services/UserCartService";


const initialState = {
    cartItems: [],
    status: 'idle',
    error: {}
}

export const fetchCartItems = createAsyncThunk(
    'cart/cartItems',
    () => UserCartService.getCartItems()
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    (product) => UserCartService.addToCart(product)
)

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    (product) => UserCartService.removeFromCart(product)
)

export const clearCart = createAsyncThunk(
    'cart/clearCart',
    ()=> UserCartService.clearCart()
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCartItems.pending.type]: (state, action) => {
            state.status = 'loading'
            state.cartItems = []
            state.error = {}
        },
        [fetchCartItems.fulfilled.type]: (state, action) => {
            state.status = 'idle'
            state.cartItems = action.payload
            state.error = {}
        },
        [fetchCartItems.rejected.type]: (state, action) => {
            state.status = 'idle'
            state.cartItems = []
            state.error = action.payload
        },
        [addToCart.pending.type]: (state, action) => {
            state.status = 'loading'
            state.error = {}
        },
        [addToCart.fulfilled.type]: (state, action) => {
            let itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex === -1) {
                state.cartItems.push({...action.payload, cartItemQty: 1})
            } else {
                state.cartItems[itemIndex].cartItemQty += 1
            }

            state.status = 'idle'
            state.error = {}
        },
        [addToCart.rejected.type]: (state, action) => {
            state.status = 'idle'
            state.error = action.payload
        },
        [removeFromCart.pending.type]: (state, action) => {
            state.status = 'loading'
            state.error = {}
        },
        [removeFromCart.fulfilled.type]: (state, action) => {
            let itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (itemIndex !== -1) {
                if (state.cartItems[itemIndex].cartItemQty === 1) {
                    state.cartItems.splice(itemIndex, 1)
                } else {
                    state.cartItems[itemIndex].cartItemQty -= 1
                }

            }
            state.error = {}
            state.status = 'idle'
        },
        [removeFromCart.rejected.type]: (state, action) => {
            state.status = 'idle'
            state.error = action.payload
        },
        [clearCart.pending.type]: (state, action) => {
            state.status = 'loading'
            state.error = {}
        },
        [clearCart.fulfilled.type]: (state, action) => {
            state.cartItems.length = 0
            state.error = {}
            state.status = 'idle'
        },
        [clearCart.rejected.type]: (state, action) => {
            state.status = 'idle'
            state.error = action.payload
        }
    }
})

export default cartSlice.reducer