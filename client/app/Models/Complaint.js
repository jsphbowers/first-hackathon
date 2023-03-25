import { appState } from "../AppState.js"
import { Profile } from "./Account.js"


export class Complaint {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.location = data.location
    this.trending = data.trending
    this.whinerId = data.whinerId
    this.whiner = new Profile(data.whiner)
    this.createdAt = new Date(data.createdAt)
  }

  get complaintTemplate() {
    return `
    <div class="row bg-primary my-3 p-3 justify-content-between">
    <img class="post-img col-7" src="${this.imgUrl}" alt="${this.name}">
    <div class="col-5 ">
      <div class="d-flex justify-content-end align-items-center">
      <h4 class="m-0">${this.whiner.name}</h4>
    <img class="avatar ms-3" src="${this.whiner.picture}" alt="${this.whiner.name}">
    </div>
    <br>
    <div class="bg-info min-h rounded p-3">
    <p class="">${this.location}</p>
    <p class="">${this.description}</p>
    </div>
      </div>
    <div>
    ${this.CommentsForComplaint}
    </div>
    </div>
    `;
  }

  get CommentsForComplaint() {
    let comments = appState.comments.filter(c => c.complaintId == this.id)
    let template = ""
    comments.forEach(c => template += c.commentTemplate)
    return template
  }
}

