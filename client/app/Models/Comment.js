export class Comment {
  constructor(data) {
    this.id = data.id
    this.whiner = data.whiner;
    this.description = data.description;
    this.complaintId = data.complaintId
  }

  get commentTemplate() {
    return `
    <div class="elevation-2 my-2 ms-2 rounded">
              <div class="d-flex align-items-center py-3 ps-3">
                <img class="avatar d-flex align-items-center"
                  src="${this.whiner.picture}"
                  alt="" title="${this.whiner.name}">
                <p class="ps-2 m-0">${this.description}</p>
              </div>
            </div>
            `
  }
}
