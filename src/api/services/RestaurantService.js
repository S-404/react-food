import {mockAPI} from "../MockApi";

export default class RestaurantService {
    static async getRestaurantMenu(restaurantId) {
        return await mockAPI.getRestaurantMenu(restaurantId)
    }

    static async getRestaurantData(id) {
        return await mockAPI.getRestaurantData(id)
    }
    static async getRestaurantOffer(restaurantId) {
        return await mockAPI.getRestaurantOffer(restaurantId)
    }
}