const { post } = require('../routes/posts')
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
    async getBlogs(req, res, next){
        try {
            const blogs = await postService.getBlogs(next)
            if(!blogs) throw 'no blogs found'
            res.status(200).json(blogs)
        } catch (error) {
            console.error(error)
        }
    }
    async deleteBlog(req, res, next){
        try {
            const id = await postService.deletePost(req.params.id, req.user.id, next)
            if(!id) throw 'You cannot delete this post'
            res.status(200).json(id)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new PostController()