import { Schema } from "mongoose"

export const PetsSchema = new Schema(
  {
    name: { type: String, minlength: 1, maxlegnth: 50, required: true },
    age: { type: Number, min: 0, max: 500, required: true },
    isVaccinated: { type: Boolean, default: false },
    species: { type: String, enum: [`dog`, `cat`, `reptile`, `rodent`, `fish`, `bird`, 'unknown'], default: `unknown` },
    imgUrl: { type: String, minlength: 0, maxlength: 500, required: false },
    status: { type: String, enum: [`adopted`, `adoptable`], required: true },
    likes: [{ type: String, maxlength: 50 }]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }

)
