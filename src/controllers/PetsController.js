import BaseController from "../utils/BaseController.js";

export class PetsController extends BaseController {
  constructor() {
    super(`api/pets`)
    this.router
      .get(``, this.getPets)
  }
  getPets(request, response, next) {
    try {
      response.send(`Pets Controller is loaded`)
    } catch (error) {
      next(error)
    }
  }
}