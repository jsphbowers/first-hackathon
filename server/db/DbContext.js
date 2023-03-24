import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from '../models/Comment.js';
import { ComplaintSchema } from "../models/Complaint.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Complaints = mongoose.model('Complaint', ComplaintSchema)
  Comments = mongoose.model(`Comment`, CommentSchema)
}

export const dbContext = new DbContext()
