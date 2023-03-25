import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js";


class CommentsService {

    async getCommentsByComplaintId(query) {
        const comments = await dbContext.Comments.find(query).populate(`whiner`)
        return comments
    }

    async createComment(commentData) {
        const comment = await dbContext.Comments.create(commentData);
        await comment.populate(`whiner`)
        return comment
    }

    async deleteComment(userId, commentId) {
        const comment = await dbContext.Comments.findById(commentId);
        // @ts-ignore
        if (comment.whinerId != userId) {
            throw new Forbidden(`You are not authorized to delete this comment`)
        }
        // @ts-ignore
        await comment.remove();
    }

}

export const commentsService = new CommentsService()