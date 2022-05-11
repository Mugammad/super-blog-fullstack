const db = require('../db/db')

class PostDAO {
    async createPost(title, category, content, image, created_by, next) {
        try {
            const [categoryFound] = await db('category')
                .from('category')
                .where('name', category)
                .returning('categoryFound')

            const [id] = await db('posts')
                .insert({
                    title,
                    category_id: categoryFound.id,
                    content,
                    image,
                    created_by
                })
                .returning('id')

            return id

        } catch (error) {
            return next(error)
        }
    }
    async deletePost(postId, userId, next) {
        try {
            const [postFound] = await db('posts')
                .from('posts')
                .where('id', postId)
                .returning('postFound')

            if (postFound.created_by != userId) throw 'You cannot delete this post'

            await db('posts')
                .from('posts')
                .where('id', postId)
                .del()

            return `removed product with id of ${postFound.id}`
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = new PostDAO()