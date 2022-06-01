import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {

    async getHouses() {
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/houses')
        console.log('getting houses', res.data);
        ProxyState.houses = res.data.map(h => new House(h))

    }
    async createHouse(houseData) {
        console.log('arrived at service un-damaged', houseData);
        const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/houses', houseData)
        ProxyState.houses = [...ProxyState.houses, new House(res.data)]
        console.log('Create House', res.data);
    }
    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
    }
}


export const housesService = new HousesService()