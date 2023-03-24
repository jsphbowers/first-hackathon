import { dbContext } from "../db/DbContext.js";


class ComplaintsService {
  async getComplaints(query) {
    const complaints = await dbContext.Complaints.find(query)
    return complaints
  }
  async createComplaint(complaintData) {
    const newComplaint = await dbContext.Complaints.create(complaintData)
    return newComplaint
  }

}

export const complaintsService = new ComplaintsService();