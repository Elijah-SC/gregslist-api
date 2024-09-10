import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { HouseSchema } from "../models/Houses.js";
import { PetsSchema } from "../models/Pets.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Houses = mongoose.model(`House`, HouseSchema)
  Pets = mongoose.model(`Pet`, PetsSchema)

}

export const dbContext = new DbContext()
