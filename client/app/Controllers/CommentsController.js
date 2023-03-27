import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";
import { commentsService } from "../Services/CommentsService.js";
import { getFormData } from "../Utils/FormHandler.js";

// function _drawComments() {
//   debugger
//   for (let i = 0; i < appState.complaints.length; i++) {
//     const complaint = appState.complaints[i];
//     let template = ""
//     let commentId = ""
//     appState.comments.forEach(com => {
//       commentId = com.complaintId
//       console.log(`ComplaintID:`, complaint.id, `CommentId:`, commentId);
//       if (complaint.id == commentId) {
//         template += com.commentTemplate
//         setHTML(`comment-${complaint.id}`, template);
//       }
//     });
//   }
// }

export class CommentsController {
  constructor() {
    console.log("hello from comments");
    // this.getTopComment();
    this.getAllComments();
    // appState.on("comments", _drawComments);
  }

  // async getTopComment() {
  //   try {
  //     await commentsService.getTopComment();
  //   } catch (error) {
  //     console.error(error);
  //     Pop.error(error.message);
  //   }
  // }
  async getAllComments() {
    try {
      await commentsService.getAllComments();
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }

}
