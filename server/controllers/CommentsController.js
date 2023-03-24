import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";


export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get(``, this.getComments)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post(``, this.createComment)
    }

    async getComments(req, res, next) {
        try {
            const query = req.query
            const comments = await commentsService.getComments(query);
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

}