import { appState } from "../AppState.js"
import { complaintsService } from "../Services/ComplaintsService.js"
import { getFormData } from "../Utils/FormHandler.js"
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

  async createComplaint() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      let imgPreview = document.getElementById("img-preview");
      // @ts-ignore
      formData.imgUrl = imgPreview.src
      // @ts-ignore
      console.log('form-data', formData);
      await complaintsService.createComplaint(formData)
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#complaint-modal').hide()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }


  previewImage() {
    let imgInput = document.getElementById("imgUrl");
    let imgPreview = document.getElementById("img-preview");
    imgPreview.src = imgInput.value;
    imgInput.value = ``
  }
}