const postService = require('../service/posts')

class PostController {
    async postBLog(req, res, next) {
        try {
            const id = await postService.createPost(req.body, req.user.id, next)
            res.status(201).json(id)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new PostController()