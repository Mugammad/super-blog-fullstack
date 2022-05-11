const db = require('../db/db')

class PostDAO {
    async createPost(title, category, content, image, created_by, next) {
        try {
            const [categoryFound] = await db('category')
                .from('category')
                .where('name', category)
                .returning('categoryFound')
            
            const [id] = await db('post')
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
}

module.exports = new PostDAO()