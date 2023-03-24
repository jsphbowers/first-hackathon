

export class Complaint {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.location = data.location
    this.trending = data.trending
    this.whinerId = data.whinerId
    this.createdAt = new Date(data.createdAt)
  }
}