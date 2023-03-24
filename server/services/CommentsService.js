import { dbContext } from "../db/DbContext.js"


class CommentsService {

    async getComments(query) {
        const comments = await dbContext.Comments.find(query)
        return comments
    }

    async createComment(commentData) {
        const comment = await dbContext.Comments.create(commentData);
        return comment
    }

}

export const commentsService = new CommentsService()