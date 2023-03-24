import mongoose from "mongoose";
const Schema = mongoose.Schema

export const ComplaintSchema = new Schema({
  name: { type: String, required: true, maxLength: 30, minLength: 3 },
  imgUrl: { type: String, required: true, maxLength: 500 },
  description: { type: String, required: true, maxLength: 500, minLength: 20 },
  location: { type: String, required: true, maxLength: 100 },
  trending: { type: Boolean, default: false },
  whinerId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } })

ComplaintSchema.virtual(`whiner`, {
  localField: "whinerId",
  ref: "Account",
  foreignField: "_id",
  justOne: true
})
