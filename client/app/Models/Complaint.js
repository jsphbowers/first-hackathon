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
    <div class="row bg-primary my-4 p-3 justify-content-between elevation-5 rounded-2">
    <div class="col-12">
    <div class="row justify-content-between">
    <div class="col-8 d-flex justify-content-start align-items-center">
    <img class="avatar my-2" src="${this.whiner.picture}" alt="${this.whiner.name}">
    <h4 class="m-0 ps-2">${this.whiner.name}</h4>
    </div>
    <div class="col-2 d-flex align-items-center">
    <h5 class="m-0 selectable">Comments....</h5>
    </div>
    <div class="col-1 d-flex justify-content-end"><button onclick="app.complaintsController.deleteComplaint()" type="button" class="btn btn-outline-info"><i class="mdi mdi-delete-forever">
    </i> </button></div>
    </div>
    </div>
    <div class="col-6 px-2">
    <img class="post-img elevation-3" src="${this.imgUrl}" alt="${this.name}">
    </div>
    <div class="col-5">
    ${this.CommentsForComplaint}
    </div>
    <div class="col-7 ">
    <br>
    <div class="">
    <p class="">${this.location}</p>
    <p class="">${this.description}</p>
    </div>
      </div>
      <form onsubmit="app.commentsController.createComment()" class="col-5 d-flex align-items-end ">
      <input class="form-control inline-input" name="comment" id="comment" type="text" placeholder="Add comment...">
      <button type="submit" class="btn btn-success btn-add" >+</button>
      </form>
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

