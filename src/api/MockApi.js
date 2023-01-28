import mockRestaurantMenu from '../store/mockData/mockRestaurantMenu.json'
import mockRestaurant from '../store/mockData/mockRestaurant.json'
import mockRestaurantOffer from '../store/mockData/mockRestaurantOffer.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const mockAPI = {
    getRestaurantList: () => delay(1000).then(() => Promise.resolve(mockRestaurant)),

    getRestaurantMenu: (restaurantId) => delay(1000).then(() => {
        let index = mockRestaurantMenu.findIndex(item => item.restaurantId === restaurantId)
        let result = index !== -1 ? mockRestaurantMenu[index] : {}
        return Promise.resolve(result.categories)
    }),

    getRestaurantData: (id) => delay(1000).then(() => {
        let index = mockRestaurant.findIndex(item => item.id === +id)
        let result = index !== -1 ? mockRestaurant[index] : {}
        return Promise.resolve(result)
    }),

    getRestaurantOffer: (restaurantId) => delay(1000).then(() => {
        let index = mockRestaurantOffer.findIndex(item => item.restaurantId === restaurantId)
        let result = index !== -1 ? mockRestaurantOffer[index] : {}
        return Promise.resolve(result)
    }),

    getCartItems: () => delay(500).then(() => Promise.resolve([])),

    addToCart: (product) => delay(500).then(() => {
        //smth billing logic
        return Promise.resolve(product)
    }),
    removeFromCart: (product) => delay(500).then(() => {
        //smth billing logic
        return Promise.resolve(product)
    }),
    clearCart: () => delay(500).then(() => {
        //smth billing logic
        let emptyCart = []
        return Promise.resolve(emptyCart)
    }),
    recalculateTotalAmount: ({cartItems, selectedRestaurant}) => delay(500).then(() => {
        //smth billing logic
        let result = {amount: 0, discount: 0, delivery: 0, totalAmount: 0}
        return Promise.resolve(result)
    })
}