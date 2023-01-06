import mockDB from '../store/mockData/mockData.json'

const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

export const mockAPI = {
    getRestaurantMenu: () => delay().then(() => Promise.resolve(mockDB)),
    // getCategory:  (id) => Promise.resolve(mockDB.categories.find(v => v.id === id)),
}