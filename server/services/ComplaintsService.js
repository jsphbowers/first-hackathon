import { dbContext } from "../db/DbContext.js";
import { Forbidden } from "../utils/Errors.js";


class ComplaintsService {

  async getComplaints(query) {
    const complaints = await dbContext.Complaints.find(query)
    return complaints
  }

  async getComplaintById(complaintId) {
    const complaint = await dbContext.Complaints.findById(complaintId)
    return complaint
  }

  async createComplaint(complaintData) {
    const newComplaint = await dbContext.Complaints.create(complaintData)
    return newComplaint
  }

  async deleteComplaint(complaintId, userId) {
    const foundComplaint = await this.getComplaintById(complaintId)
    if (foundComplaint.whinerId != userId) {
      throw new Forbidden("Not authorized to delete this complaint")
    }
    await foundComplaint.remove()
  }
}

export const complaintsService = new ComplaintsService();