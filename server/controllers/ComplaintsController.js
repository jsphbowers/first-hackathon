import { Auth0Provider } from "@bcwdev/auth0provider";
import { complaintsService } from "../services/ComplaintsService.js";
import BaseController from "../utils/BaseController.js";


export class ComplaintsController extends BaseController {
  constructor() {
    super('api/complaints')
    this.router
      .get('/:complaintId', this.getComplaintById)
      .get('', this.getComplaints)
      // .get('/:whinerId', this.getComplaintByWhinerId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComplaint)
      .delete('/:complaintId', this.deleteComplaint)
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

  async getComplaintById(req, res, next) {
    try {
      const complaintId = req.params.complaintId
      const complaint = await complaintsService.getComplaintById(complaintId)
      res.send(complaint)
    } catch (error) {
      next(error)
    }
  }

  // async getComplaintByWhinerId(req, res, next) {
  //   try {
  //     const whinerId = req.params.whinerId
  //     const complaints = await complaintsService.getComplaintByWhinerId(whinerId)
  //     res.send(complaints)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

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

  async deleteComplaint(req, res, next) {
    try {
      const userId = req.userInfo.id
      const complaintId = req.params.complaintId
      await complaintsService.deleteComplaint(complaintId, userId)
      res.send(`deleted complaint id:${complaintId}`)
    } catch (error) {
      next(error)
    }
  }
}