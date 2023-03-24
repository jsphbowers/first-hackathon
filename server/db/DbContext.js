import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ComplaintSchema } from "../models/Complaint.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Complaints = mongoose.model('Complaint', ComplaintSchema)
}

export const dbContext = new DbContext()
