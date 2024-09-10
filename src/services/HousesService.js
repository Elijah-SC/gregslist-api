import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
  async getHouses(query) {
    const sortBy = query.sort
    delete query.sort
    const pageNumber = parseInt(query.page) || 1
    const limitAmount = 5
    const skipAmount = (pageNumber - 1) * limitAmount
    delete query.page

    const houses = await dbContext.Houses.find(query)
      .sort(sortBy)
      .skip(skipAmount)
      .limit(limitAmount)
      .populate(`creator`)

    const houseCount = await dbContext.Houses.countDocuments(query)

    return {
      results: houses,
      count: houseCount,
      currentPage: pageNumber,
      totalPages: Math.ceil(houseCount / limitAmount)
    }
  }
  async getHouseById(houseId) {
    const house = (await dbContext.Houses.findById(houseId)).populated(`creator`)
    if (house == null) {
      throw new BadRequest(`No House was found with Id ${houseId}`)
    }
    return house
  }

}

export const housesService = new HousesService()