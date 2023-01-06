import {mockAPI} from "../MockApi";

export default class RestaurantService {
    static async getRestaurantMenu() {
        return await mockAPI.getRestaurantMenu()
    }
}