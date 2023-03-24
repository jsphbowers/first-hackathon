import { dbContext } from "../db/DbContext.js";
import { Forbidden } from "../utils/Errors.js";


class ComplaintsService {


  async getComplaints(query) {
    const complaints = await dbContext.Complaints.find(query).populate(`whiner`, `name picture`)
    return complaints
  }

  async getComplaintById(complaintId) {
    const complaint = await dbContext.Complaints.findById(complaintId).populate(`whiner`, `name picture`)
    return complaint
  }

  // async getComplaintByWhinerId(whinerId) {
  //   const complaints = await dbContext.Complaints.find({ whinerId })
  //   return complaints
  // }

  async createComplaint(complaintData) {
    const newComplaint = await dbContext.Complaints.create(complaintData)
    await newComplaint.populate(`whiner`, `name picture`)
    return newComplaint
  }

  async deleteComplaint(complaintId, userId) {
    const foundComplaint = await this.getComplaintById(complaintId)
    // @ts-ignore
    if (foundComplaint.whinerId != userId) {
      throw new Forbidden("Not authorized to delete this complaint")
    }
    // @ts-ignore
    await foundComplaint.remove()
  }
}

export const complaintsService = new ComplaintsService();