import { appState } from "../AppState.js"
import { complaintsService } from "../Services/ComplaintsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawAllComplaints() {
  let complaints = appState.complaints
  let template = ''
  complaints.forEach(c => template += c.complaintTemplate)
  setHTML('complaint', template)
}
export class ComplaintsController {
  constructor() {
    this.getComplaints()
    appState.on('complaints', _drawAllComplaints)
  }

  async getComplaints() {
    try {
      await complaintsService.getComplaints()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  createComplaint() {
    try {

    } catch (error) {

    }
  }
}