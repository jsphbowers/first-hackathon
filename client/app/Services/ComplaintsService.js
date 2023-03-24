import { appState } from "../AppState.js";
import { Complaint } from "../Models/Complaint.js";
import { server } from "./AxiosService.js";

class ComplaintsService {
  async getComplaints() {
    const res = await server.get('api/complaints')
    // console.log(res.data);
    appState.complaints = res.data.map(c => new Complaint(c))
    // console.log(appState.complaints);
  }

}

export const complaintsService = new ComplaintsService();