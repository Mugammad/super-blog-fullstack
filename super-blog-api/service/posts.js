const postDAO = require('../dao/posts')

class PostService {
    async createPost(postDto, userId, next) {
        const { title, category, content, image } = postDto

        return postDAO.createPost(title, category, content, image, userId, next)
    }
    async deletePost(postId, userId, next){
        return postDAO.deletePost(postId, userId, next)
    }
}

module.exports = new PostService()