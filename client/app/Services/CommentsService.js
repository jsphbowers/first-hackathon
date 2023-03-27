import { appState } from "../AppState.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";
import { Profile } from "../Models/Account.js";

class CommentsService {

  // getAllCommentsByComplaintId() {
  //   const complaints = appState.complaints
  //   const res = await server.filter('api/complaints/' + complaints.id '/')
  // }
  // getTopComment() {

  //   let topComment = filteredComments[0]
  // }

  async getAllComments() {
    const res = await server.get(`api/comments`);
    // console.log(res.data);
    appState.comments = res.data.map((com) => new Comment(com));
    console.log(appState.comments);
    appState.emit(`complaints`);
  }
}

export const commentsService = new CommentsService();
