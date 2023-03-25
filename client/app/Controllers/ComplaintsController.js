import { appState } from "../AppState.js";
// @ts-ignore
import { Account } from "../Models/Account.js";
// @ts-ignore
import { Complaint } from "../Models/Complaint.js";
import { complaintsService } from "../Services/ComplaintsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawAllComplaints() {
  let complaints = appState.complaints;
  let template = "";
  complaints.forEach((c) => (template += c.complaintTemplate));
  setHTML("complaint", template);
}

function _drawMyComplaints() {
  let complaints = appState.activeComplaints;
  let template = "";
  complaints.forEach((c) => (template += c.complaintTemplate));
  setHTML("complaint", template);
}

export class ComplaintsController {
  constructor() {
    // debugger;
    console.log("hello from complaints controller");
    this.getComplaints();
    appState.on("complaints", _drawAllComplaints);
    appState.on("activeComplaints", _drawMyComplaints);
  }

  async getComplaints() {
    try {
      await complaintsService.getComplaints();
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }

  async createComplaint() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      const form = window.event.target;
      const formData = getFormData(form);
      let imgPreview = document.getElementById("img-preview");
      // @ts-ignore
      formData.imgUrl = imgPreview.src;
      // @ts-ignore
      console.log("form-data", formData);
      await complaintsService.createComplaint(formData);
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance("#complaint-modal").hide();
    } catch (error) {
      console.error(error);
      Pop.error(error);
    }
  }

  previewImage() {
    let imgInput = document.getElementById("imgUrl");
    let imgPreview = document.getElementById("img-preview");
    // @ts-ignore
    imgPreview.src = imgInput.value;
    // @ts-ignore
    imgInput.value = ``;
  }

  getMyComplaints() {
    console.log(appState.account.id);
    const userId = appState.account.id;
    complaintsService.getMyComplaints(userId);
  }

  drawHome() {
    _drawAllComplaints();
  }
}
