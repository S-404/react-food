import {mockAPI} from "../MockApi";

export default class CartService {
    static async addToCart(product) {
        return await mockAPI.addToCart(product)
    }
    static async removeFromCart(product) {
        return await mockAPI.removeFromCart(product)
    }
    static async clearCart() {
        return await mockAPI.clearCart()
    }
    static async recalculateTotalAmount(cartItems, selectedRestaurant){
        return await mockAPI.recalculateTotalAmount({cartItems, selectedRestaurant})
    }
}