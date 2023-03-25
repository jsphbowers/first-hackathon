import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get(``, this.getCommentsByComplaintId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .delete(`/:commentId`, this.deleteComment)
            .post(``, this.createComment)
    }

    async getCommentsByComplaintId(req, res, next) {
        try {
            const query = req.query
            const comments = await commentsService.getCommentsByComplaintId(query);
            res.send(comments)
        } catch (error) {
            next(error)
        }
    }

    async createComment(req, res, next) {
        try {
            const userId = req.userInfo.id
            const commentData = req.body
            commentData.whinerId = userId
            const comment = await commentsService.createComment(commentData);
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async deleteComment(req, res, next) {
        try {
            const userId = req.userInfo.id
            const commentId = req.params.commentId
            const comment = await commentsService.deleteComment(userId, commentId);
            res.send(`Comment ID:${commentId} was deleted`)
        } catch (error) {
            next(error)
        }
    }

}