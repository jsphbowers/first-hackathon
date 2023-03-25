import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";
import { commentsService } from "../Services/CommentsService.js";

// function _drawComments() {
//   let template = "";
//   let comments = appState.comments;
//   comments.forEach((com) => (template += com.commentTemplate));
//   setHTML("comment", template);
// }

export class CommentsController {
  constructor() {
    console.log("hello from comments");
    // this.getTopComment();
    // this.getAllComments();
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
  // async getAllComments() {
  //   try {
  //     await commentsService.getAllComments();
  //   } catch (error) {
  //     console.error(error);
  //     Pop.error(error.message);
  //   }
  // }
}
