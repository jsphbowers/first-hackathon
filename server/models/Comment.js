import mongoose from "mongoose";
const Schema = mongoose.Schema



export const CommentSchema = new Schema({
    description: { type: String, required: true, maxLength: 1000 },
    whinerId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    complaintId: { type: Schema.Types.ObjectId, required: true, ref: 'Complaint' }
},
    {
        timestamps: true, toJSON: { virtuals: true }
    })