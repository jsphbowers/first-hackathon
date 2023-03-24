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
    this.whiner = data.whiner
    this.createdAt = new Date(data.createdAt)
  }

  get complaintTemplate() {
    return `
    <img class="post-img" src="${this.imgUrl}" alt="${this.name}">

    <div class="col-4">
      <img class="rounded w-50" src="${this.whiner.picture}" alt="${this.whiner.name}">
      <p>${this.whiner.name}</p>
      <p class="bg-primary">${this.description}</p>
    </div>
    `
  }
}