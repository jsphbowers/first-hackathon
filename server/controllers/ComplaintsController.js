import { Auth0Provider } from "@bcwdev/auth0provider";
import { complaintsService } from "../services/ComplaintsService.js";
import BaseController from "../utils/BaseController.js";


export class ComplaintsController extends BaseController {
  constructor() {
    super('api/complaints')
    this.router
      .get('', this.getComplaints)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComplaint)
  }
  async getComplaints(req, res, next) {
    try {
      const query = req.query
      const complaints = await complaintsService.getComplaints(query)
      return res.send(complaints)
    } catch (error) {
      next(error)
    }
  }
  async createComplaint(req, res, next) {
    try {
      const userId = req.userInfo.id
      const complaintData = req.body
      complaintData.whinerId = userId
      const newComplaint = await complaintsService.createComplaint(complaintData)
      res.send(newComplaint)
    } catch (error) {
      next(error)
    }
  }
}