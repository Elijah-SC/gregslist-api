import { Schema } from "mongoose";

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, min: 0, max: 1000, required: true },
    bathrooms: { type: Number, min: 0, max: 1000, required: true },
    levels: { type: Number, min: 0, max: 1000, required: true },
    imgUrl: { type: String, minlegnth: 1, maxlength: 500, required: true },
    price: { type: Number, min: 0, max: 999999999, required: true },
    year: { type: Number, min: 1500, max: 2025, required: true },
    description: { type: String, minlegnth: 0, maxlength: 500, required: false },
    creatorId: { type: Schema.ObjectId, required: true, ref: `Account` }
  },

  { timestamps: true, toJSON: { virtuals: true } }
)

HouseSchema.virtual(`creator`, {
  localField: `creatorId`,
  foreignField: `_id`,
  ref: `Account`,
  justOne: true
})

const HouseData = ` },
    "bedrooms": 3,
    "bathrooms": 2,
    "levels": 2,
    "imgUrl": "https://pixabay.com/get/g865cf3f3dd37299c14e7b89c1d483f7362508d705c9bff31a107018e2c927482e7977d6e2d6b00c83480bfccd8955c2056fe904ac162b1d95089b1d3f240c9c3_640.jpg",
    "year": 2003,
    "price": 230000,
    "description": "Rustic log cabin with a stone fireplace and mountain views.",
    "creatorId": {
      "$oid": "6615af31b7376d33f96399af"
    },`