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
    async getBlogs(next) {
        try {
            const blogs = await db('posts')
                .select()
                .returning('blogs')
            return blogs
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
    async likePost(post_liked_id, userId, next) {
        try {
            const [alreadyLiked] = await db('liked')
                .from('liked')
                .where('user_id', userId)
                .where('post_liked_id', post_liked_id)
                .returning('alreadyLiked')

            if(!alreadyLiked) throw 'continue'

            return `user with id of ${alreadyLiked.user_id} has already liked post with id of ${alreadyLiked.post_liked_id}`
        } catch (error) {
            console.log(error)
            try {
                const [postFound] = await db('posts')
                    .from('posts')
                    .where('id', post_liked_id)
                    .returning('postFound')

                if(!postFound) throw `Post with id of ${post_liked_id} NOT FOUND`

                console.log(userId)
                console.log(post_liked_id)
                const [id] = await db('liked')
                    .insert({
                        user_id: parseInt(userId),
                        post_liked_id
                    })
                    .returning('id')

                return `post liked titled ${postFound.title} with id of ${postFound.id} by user with id of ${userId}`
            } catch (err) {
                return next(err)
            }
        }
    }
}

module.exports = new PostDAO()