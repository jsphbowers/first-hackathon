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
    <img class="post-img col-6" src="${this.imgUrl}" alt="${this.name}">
    <div class="col-6">
      <img class="rounded" src="${this.whiner.picture}" alt="${this.whiner.name}">
      <p>${this.whiner.name}</p>
      <p class="bg-primary">${this.description}</p>
    </div>
    <div id="comment">
    </div>
    </div>
    `;
  }
}

