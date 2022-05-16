const postDAO = require('../dao/posts')

class PostService {
    async createPost(postDto, userId, next) {
        const { title, category, content, image } = postDto

        return postDAO.createPost(title, category, content, image, userId, next)
    }
    async getBlogs(next){
        return postDAO.getBlogs(next)
    }
    async deletePost(postId, userId, next){
        return postDAO.deletePost(postId, userId, next)
    }
    async likeBlog(postId, userId, next){
        return postDAO.likePost(postId, userId, next)
    }
}

module.exports = new PostService()