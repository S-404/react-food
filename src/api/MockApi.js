import mockRestaurantMenu from '../store/mockData/mockRestaurantMenu.json'
import mockRestaurant from '../store/mockData/mockRestaurant.json'
import mockRestaurantOffer from '../store/mockData/mockRestaurantOffer.json'

const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

export const mockAPI = {
    getRestaurantList: () => delay().then(() => Promise.resolve(mockRestaurant)),

    getRestaurantMenu: (restaurantId) => delay().then(() => {
        let index = mockRestaurantMenu.findIndex(item => item.restaurantId === restaurantId)
        let result = index !== -1 ? mockRestaurantMenu[index] : {}
        return Promise.resolve(result.categories)
    }),

    getRestaurantData: (id) => delay().then(() => {
        let index = mockRestaurant.findIndex(item => item.id === id)
        let result = index !== -1 ? mockRestaurant[index] : {}
        return Promise.resolve(result)
    }),

    getRestaurantOffer: (restaurantId) => delay().then(() => {
        let index = mockRestaurantOffer.findIndex(item => item.restaurantId === restaurantId)
        let result = index !== -1 ? mockRestaurantOffer[index] : {}
        return Promise.resolve(result)
    }),
}