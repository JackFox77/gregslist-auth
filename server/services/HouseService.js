import { dbContext } from "../db/DbContext.js";

class HousesService{
    async getHouse() {
        let houses = await dbContext.Houses.find()
        return houses
    }
    // async get HouseById(houseId) {
        
    }



export const housesService = new HousesService()