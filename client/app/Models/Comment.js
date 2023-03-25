export class Comment {
  constructor(data) {
    this.whiner = data.whiner;
    this.description = data.description;
    this.complaintId = data.complaintId
  }

  get commentTemplate() {
    return `
    <div class="col-12">
              <div class="d-flex py-4">
                <img class="avatar"
                  src="${this.whiner.picture}"
                  alt="" title="${this.whiner.name}">
                <p>${this.description}</p>
              </div>
            </div>`
  }
}
